#!/usr/bin/env node

      import {createRequire as __cjsCompatRequire} from 'module';
      const require = __cjsCompatRequire(import.meta.url);
    
import {
  main
} from "../../chunk-6SGIODCT.js";
import "../../chunk-3WO6KCLX.js";
import "../../chunk-H7QHUCLL.js";
import "../../chunk-PUX2LOAB.js";
import "../../chunk-HG2G5L5H.js";
import "../../chunk-I6R3GL3L.js";
import {
  NodeJSFileSystem,
  setFileSystem
} from "../../chunk-STORTTKY.js";
import "../../chunk-KPQ72R34.js";

// bazel-out/darwin_arm64-fastbuild/bin/packages/compiler-cli/src/bin/ngc.mjs
import "reflect-metadata";
async function runNgcComamnd() {
  process.title = "Angular Compiler (ngc)";
  const args = process.argv.slice(2);
  setFileSystem(new NodeJSFileSystem());
  process.exitCode = main(args, void 0, void 0, void 0, void 0, void 0);
}
runNgcComamnd().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
//# sourceMappingURL=ngc.js.map
