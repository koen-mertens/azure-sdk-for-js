// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { defineConfig } from "vitest/config";
import { isPlaybackMode, relativeRecordingsPath } from "@azure-tools/test-recorder";

process.env.RECORDINGS_RELATIVE_PATH = relativeRecordingsPath();
export default defineConfig({
  define: {
    "process.env": process.env,
    __env__: process.env,
  },
  optimizeDeps: {
    include: ["@azure-tools/test-recorder"],
  },
  test: {
    testTimeout: 600000,
    hookTimeout: 600000,
    reporters: ["basic", "junit"],
    outputFile: {
      junit: "test-results.browser.xml",
    },
    browser: {
      enabled: true,
      headless: isPlaybackMode(),
      name: "chromium",
      provider: "playwright",
      providerOptions: {
        launch: {
          args: ["--disable-web-security"],
        },
      },
    },
    fakeTimers: {
      toFake: ["setTimeout", "Date"],
    },
    watch: false,
    include: ["dist-test/browser/**/*.spec.js"],
    coverage: {
      include: ["dist-test/browser/**/*.js"],
      exclude: [
        "dist-test/browser/**/*./*-browser.mjs",
        "dist-test/browser/**/*./*-react-native.mjs",
      ],
      provider: "istanbul",
      reporter: ["text", "json", "html"],
      reportsDirectory: "coverage-browser",
    },
  },
});
