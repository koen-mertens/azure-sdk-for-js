// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @file Testing the ts-package-json-required-scripts rule.
 *
 */

import { createRuleTester } from "../ruleTester.js";
import rule from "../../src/rules/ts-package-json-required-scripts.js";

//------------------------------------------------------------------------------
// Example files
//------------------------------------------------------------------------------

const examplePackageGood = `{
  "name": "@azure/service-bus",
  "author": "Microsoft Corporation",
  "version": "1.0.2",
  "license": "MIT",
  "description": "Azure Service Bus SDK for Node.js",
  "homepage": "https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/servicebus/service-bus",
  "repository": "github:Azure/azure-sdk-for-js",
  "keywords": [
    "azure",
    "cloud",
    "service bus",
    "AMQP"
  ],
  "bugs": {
    "url": "https://github.com/azure/azure-sdk-for-js/issues"
  },
  "main": "./dist/index.js",
  "module": "dist-esm/src/index.js",
  "browser": {
    "./dist/index.js": "./browser/service-bus.js",
    "./dist-esm/test/utils/aadUtils.js": "./dist-esm/test/utils/aadUtils.browser.js",
    "buffer": "buffer",
    "stream": "stream-browserify"
  },
  "types": "./typings/service-bus.d.ts",
  "engine": {
    "node": ">=6.0.0"
  },
  "dependencies": {
    "@azure/amqp-common": "^1.0.0-preview.5",
    "@types/is-buffer": "^2.0.0",
    "@azure/ms-rest-nodeauth": "^0.9.2",
    "@types/long": "^4.0.0",
    "debug": "^3.1.0",
    "is-buffer": "^2.0.3",
    "long": "^4.0.0",
    "process": "^0.11.10",
    "rhea": "^1.0.4",
    "rhea-promise": "^0.1.15",
    "tslib": "^1.9.3"
  },
  "devDependencies": {
    "@azure/arm-servicebus": "^0.1.0",
    "@types/async-lock": "^1.1.0",
    "@types/chai": "^4.1.6",
    "@types/chai-as-promised": "^7.1.0",
    "@types/debug": "^0.0.31",
    "@types/dotenv": "^6.1.0",
    "@types/mocha": "^5.2.5",
    "@types/node": "^8.0.0",
    "@types/ws": "^6.0.1",
    "@typescript-eslint/eslint-plugin": "~1.9.0",
    "@typescript-eslint/parser": "^1.7.0",
    "assert": "^1.4.1",
    "buffer": "^5.2.1",
    "chai": "^4.2.0",
    "chai-as-promised": "^7.1.1",
    "cross-env": "^5.2.0",
    "delay": "^4.2.0",
    "dotenv": "^7.0.0",
    "eslint": "^5.16.0",
    "eslint-config-prettier": "^4.2.0",
    "eslint-detailed-reporter": "^0.8.0",
    "eslint-plugin-no-null": "^1.0.2",
    "eslint-plugin-no-only-tests": "^2.3.0",
    "eslint-plugin-promise": "^4.1.1",
    "https-proxy-agent": "^2.2.1",
    "karma": "^4.0.1",
    "karma-chrome-launcher": "^2.2.0",
    "karma-coverage": "^1.1.2",
    "karma-env-preprocessor": "^0.1.1",
    "karma-firefox-launcher": "^1.1.0",
    "karma-junit-reporter": "^1.2.0",
    "karma-mocha": "^1.3.0",
    "karma-mocha-reporter": "^2.2.5",
    "karma-remap-coverage": "^0.1.5",
    "mocha": "^5.2.0",
    "mocha-junit-reporter": "^1.18.0",
    "mocha-multi": "^1.0.1",
    "moment": "^2.24.0",
    "nyc": "^14.0.0",
    "prettier": "^1.16.4",
    "promise": "^8.0.3",
    "puppeteer": "^1.11.0",
    "rimraf": "^2.6.2",
    "rollup": "~1.13.1",
    "rollup-plugin-commonjs": "^9.2.0",
    "rollup-plugin-inject": "^2.2.0",
    "rollup-plugin-json": "^3.1.0",
    "rollup-plugin-multi-entry": "^2.1.0",
    "rollup-plugin-node-resolve": "^4.2.0",
    "rollup-plugin-replace": "^2.1.0",
    "rollup-plugin-shim": "^1.0.0",
    "rollup-plugin-sourcemaps": "^0.4.2",
    "rollup-plugin-terser": "^4.0.4",
    "ts-node": "^7.0.1",
    "typescript": "^3.2.2",
    "ws": "^6.2.1"
  },
  "files": [
    "dist/",
    "dist-esm/src/",
    "src/",
    "typings/service-bus.d.ts",
    "tsconfig.json"
  ],
  "sideEffects": false,
  "scripts": {
    "build": "build",
    "test": "test",
    "format": "format",
    "lint": "lint"
  }
}`;

const examplePackageBad = `{
  "name": "@azure/service-bus",
  "author": "Microsoft Corporation",
  "version": "1.0.2",
  "license": "MIT",
  "description": "Azure Service Bus SDK for Node.js",
  "homepage": "https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/servicebus/service-bus",
  "repository": "github:Azure/azure-sdk-for-js",
  "keywords": [
    "azure",
    "cloud",
    "service bus",
    "AMQP"
  ],
  "bugs": {
    "url": "https://github.com/azure/azure-sdk-for-js/issues"
  },
  "main": "./dist/index.js",
  "module": "dist-esm/src/index.js",
  "browser": {
    "./dist/index.js": "./browser/service-bus.js",
    "./dist-esm/test/utils/aadUtils.js": "./dist-esm/test/utils/aadUtils.browser.js",
    "buffer": "buffer",
    "stream": "stream-browserify"
  },
  "types": "./typings/service-bus.d.ts",
  "engine": {
    "node": ">=6.0.0"
  },
  "dependencies": {
    "@azure/amqp-common": "^1.0.0-preview.5",
    "@types/is-buffer": "^2.0.0",
    "@azure/ms-rest-nodeauth": "^0.9.2",
    "@types/long": "^4.0.0",
    "debug": "^3.1.0",
    "is-buffer": "^2.0.3",
    "long": "^4.0.0",
    "process": "^0.11.10",
    "rhea": "^1.0.4",
    "rhea-promise": "^0.1.15",
    "tslib": "^1.9.3"
  },
  "devDependencies": {
    "@azure/arm-servicebus": "^0.1.0",
    "@types/async-lock": "^1.1.0",
    "@types/chai": "^4.1.6",
    "@types/chai-as-promised": "^7.1.0",
    "@types/debug": "^0.0.31",
    "@types/dotenv": "^6.1.0",
    "@types/mocha": "^5.2.5",
    "@types/node": "^8.0.0",
    "@types/ws": "^6.0.1",
    "@typescript-eslint/eslint-plugin": "~1.9.0",
    "@typescript-eslint/parser": "^1.7.0",
    "assert": "^1.4.1",
    "buffer": "^5.2.1",
    "chai": "^4.2.0",
    "chai-as-promised": "^7.1.1",
    "cross-env": "^5.2.0",
    "delay": "^4.2.0",
    "dotenv": "^7.0.0",
    "eslint": "^5.16.0",
    "eslint-config-prettier": "^4.2.0",
    "eslint-detailed-reporter": "^0.8.0",
    "eslint-plugin-no-null": "^1.0.2",
    "eslint-plugin-no-only-tests": "^2.3.0",
    "eslint-plugin-promise": "^4.1.1",
    "https-proxy-agent": "^2.2.1",
    "karma": "^4.0.1",
    "karma-chrome-launcher": "^2.2.0",
    "karma-coverage": "^1.1.2",
    "karma-env-preprocessor": "^0.1.1",
    "karma-firefox-launcher": "^1.1.0",
    "karma-junit-reporter": "^1.2.0",
    "karma-mocha": "^1.3.0",
    "karma-mocha-reporter": "^2.2.5",
    "karma-remap-coverage": "^0.1.5",
    "mocha": "^5.2.0",
    "mocha-junit-reporter": "^1.18.0",
    "mocha-multi": "^1.0.1",
    "moment": "^2.24.0",
    "nyc": "^14.0.0",
    "prettier": "^1.16.4",
    "promise": "^8.0.3",
    "puppeteer": "^1.11.0",
    "rimraf": "^2.6.2",
    "rollup": "~1.13.1",
    "rollup-plugin-commonjs": "^9.2.0",
    "rollup-plugin-inject": "^2.2.0",
    "rollup-plugin-json": "^3.1.0",
    "rollup-plugin-multi-entry": "^2.1.0",
    "rollup-plugin-node-resolve": "^4.2.0",
    "rollup-plugin-replace": "^2.1.0",
    "rollup-plugin-shim": "^1.0.0",
    "rollup-plugin-sourcemaps": "^0.4.2",
    "rollup-plugin-terser": "^4.0.4",
    "ts-node": "^7.0.1",
    "typescript": "^3.2.2",
    "ws": "^6.2.1"
  },
  "files": [
    "dist/",
    "dist-esm/src/",
    "src/",
    "typings/service-bus.d.ts",
    "tsconfig.json"
  ],
  "sideEffects": false,
  "scripts": {
    "format": "format",
    "lint": "lint"
  }
}`;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = createRuleTester();

ruleTester.run("ts-package-json-required-scripts", rule, {
  valid: [
    {
      // only the fields we care about
      code: '{"scripts": {"build": "build", "test": "test"}}',
      filename: "package.json",
    },
    {
      // a full example package.json (taken from https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/event-hubs/package.json with "scripts" removed for testing purposes)
      code: examplePackageGood,
      filename: "package.json",
    },
    {
      // incorrect format but in a file we don't care about
      code: '{"scripts": {}}',
      filename: "not_package.json",
    },
  ],
  invalid: [
    {
      code: '{"notScripts": {"build": "build", "test": "test"}}',
      filename: "package.json",
      errors: [
        {
          message: "scripts does not exist at the outermost level",
        },
      ],
    },
    {
      // scripts is in a nested object
      code: '{"outer": {"scripts": {"build": "build", "test": "test"}}}',
      filename: "package.json",
      errors: [
        {
          message: "scripts does not exist at the outermost level",
        },
      ],
    },
    {
      // both build and test missing
      code: '{"scripts": {}}',
      filename: "package.json",
      errors: [
        {
          message: "build is not a member of scripts",
        },
        {
          message: "test is not a member of scripts",
        },
      ],
    },
    {
      // build missing
      code: '{"scripts": {"test": "test"}}',
      filename: "package.json",
      errors: [
        {
          message: "build is not a member of scripts",
        },
      ],
    },
    {
      // test missing
      code: '{"scripts": {"build": "build"}}',
      filename: "package.json",
      errors: [
        {
          message: "test is not a member of scripts",
        },
      ],
    },
    {
      // example file with scripts missing both build and test
      code: examplePackageBad,
      filename: "package.json",
      errors: [
        {
          message: "build is not a member of scripts",
        },
        {
          message: "test is not a member of scripts",
        },
      ],
    },
  ],
});
