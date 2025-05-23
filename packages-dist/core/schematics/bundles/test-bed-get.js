'use strict';
/**
 * @license Angular v19.2.9+sha-cb4c3da-with-local-changes
 * (c) 2010-2025 Google LLC. https://angular.io/
 * License: MIT
 */
'use strict';

var ts = require('typescript');
require('os');
require('./checker-Crz1jSZM.js');
require('./compiler-B4MK7BP9.js');
require('./index-Bk_3geTg.js');
require('path');
var project_paths = require('./project_paths-CQ4-VKlW.js');
var imports = require('./imports-CIX-JgAN.js');
var symbol = require('./symbol-VPWguRxr.js');
require('@angular-devkit/core');
require('node:path/posix');
require('fs');
require('module');
require('url');
require('@angular-devkit/schematics');
require('./project_tsconfig_paths-CDVxT6Ov.js');

/** Name of the method being replaced. */
const METHOD_NAME = 'get';
/** Migration that replaces `TestBed.get` usages with `TestBed.inject`. */
class TestBedGetMigration extends project_paths.TsurgeFunnelMigration {
    async analyze(info) {
        const locations = [];
        for (const sourceFile of info.sourceFiles) {
            const specifier = imports.getImportSpecifier(sourceFile, '@angular/core/testing', 'TestBed');
            if (specifier === null) {
                continue;
            }
            const typeChecker = info.program.getTypeChecker();
            sourceFile.forEachChild(function walk(node) {
                if (ts.isPropertyAccessExpression(node) &&
                    node.name.text === METHOD_NAME &&
                    ts.isIdentifier(node.expression) &&
                    symbol.isReferenceToImport(typeChecker, node.expression, specifier)) {
                    locations.push({ file: project_paths.projectFile(sourceFile, info), position: node.name.getStart() });
                }
                else {
                    node.forEachChild(walk);
                }
            });
        }
        return project_paths.confirmAsSerializable({ locations });
    }
    async migrate(globalData) {
        const replacements = globalData.locations.map(({ file, position }) => {
            return new project_paths.Replacement(file, new project_paths.TextUpdate({
                position: position,
                end: position + METHOD_NAME.length,
                toInsert: 'inject',
            }));
        });
        return project_paths.confirmAsSerializable({ replacements });
    }
    async combine(unitA, unitB) {
        const seen = new Set();
        const locations = [];
        const combined = [...unitA.locations, ...unitB.locations];
        for (const location of combined) {
            const key = `${location.file.id}#${location.position}`;
            if (!seen.has(key)) {
                seen.add(key);
                locations.push(location);
            }
        }
        return project_paths.confirmAsSerializable({ locations });
    }
    async globalMeta(combinedData) {
        return project_paths.confirmAsSerializable(combinedData);
    }
    async stats() {
        return { counters: {} };
    }
}

/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
function migrate() {
    return async (tree) => {
        await project_paths.runMigrationInDevkit({
            tree,
            getMigration: () => new TestBedGetMigration(),
        });
    };
}

exports.migrate = migrate;
