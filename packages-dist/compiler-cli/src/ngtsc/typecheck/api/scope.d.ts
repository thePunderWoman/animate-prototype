/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import ts from 'typescript';
import { Reference } from '../../imports';
import { ClassDeclaration } from '../../reflection';
import { SymbolWithValueDeclaration } from '../../util/src/typescript';
/**
 * A PotentialImport for some Angular trait has a TypeScript module specifier, which can be
 * relative, as well as an identifier name.
 */
export interface PotentialImport {
    kind: PotentialImportKind;
    moduleSpecifier?: string;
    symbolName: string;
    isForwardReference: boolean;
}
/**
 * Which kind of Angular Trait the import targets.
 */
export declare enum PotentialImportKind {
    NgModule = 0,
    Standalone = 1
}
export interface TsCompletionEntryInfo {
    /**
     * Sometimes, the location of the tsCompletionEntry symbol does not match the location of the Angular symbol.
     *
     * For example, the BarComponent is declared in `bar.ts` and exported from there. The `public_api.ts` also
     * reexports the BarComponent from `bar.ts`, so the `tsCompletionEntrySymbolFileName` will be `public_api.ts`.
     */
    tsCompletionEntrySymbolFileName: string;
    /**
     * This data is from the tsLs completion entry, and
     * will be used in the `ls.getCompletionEntryDetails`.
     */
    tsCompletionEntryData?: ts.CompletionEntryData;
}
/**
 * Metadata on a directive which is available in a template.
 */
export interface PotentialDirective {
    ref: Reference<ClassDeclaration>;
    /**
     * The `ts.Symbol` for the directive class.
     */
    tsSymbol: SymbolWithValueDeclaration;
    /**
     * The module which declares the directive.
     */
    ngModule: ClassDeclaration | null;
    /**
     * The selector for the directive or component.
     */
    selector: string | null;
    /**
     * `true` if this directive is a component.
     */
    isComponent: boolean;
    /**
     * `true` if this directive is a structural directive.
     */
    isStructural: boolean;
    /**
     * Whether or not this directive is in scope.
     */
    isInScope: boolean;
    tsCompletionEntryInfo: TsCompletionEntryInfo | null;
}
/**
 * Metadata for a pipe which is available in a template.
 */
export interface PotentialPipe {
    ref: Reference<ClassDeclaration>;
    /**
     * The `ts.Symbol` for the pipe class.
     */
    tsSymbol: ts.Symbol;
    /**
     * Name of the pipe.
     */
    name: string | null;
    /**
     * Whether or not this pipe is in scope.
     */
    isInScope: boolean;
    tsCompletionEntryInfo: TsCompletionEntryInfo | null;
}
/**
 * Possible modes in which to look up a potential import.
 */
export declare enum PotentialImportMode {
    /** Whether an import is standalone is inferred based on its metadata. */
    Normal = 0,
    /**
     * An import is assumed to be standalone and is imported directly. This is useful for migrations
     * where a declaration wasn't standalone when the program was created, but will become standalone
     * as a part of the migration.
     */
    ForceDirect = 1
}
