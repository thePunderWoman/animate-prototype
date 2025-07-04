#!/usr/bin/env node

      import {createRequire as __cjsCompatRequire} from 'module';
      const require = __cjsCompatRequire(import.meta.url);
    
import {
  main
} from "../../chunk-QBOJXTWS.js";
import "../../chunk-EGLQSR42.js";
import "../../chunk-M3F5JUH5.js";
import "../../chunk-XER4D6T7.js";
import "../../chunk-CZ5FD3CS.js";
import {
  setFileSystem
} from "../../chunk-3AHGFMNS.js";
import {
  NodeJSFileSystem
} from "../../chunk-U5SKOFKE.js";
import "../../chunk-KPQ72R34.js";

// bazel-out/darwin_arm64-fastbuild/bin/packages/compiler-cli/src/bin/ngc.js
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
