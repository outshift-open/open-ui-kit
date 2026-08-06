/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig.json");

module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths || {}, {
      prefix: "<rootDir>/",
    }),
    "^react-syntax-highlighter$":
      "<rootDir>/test-utils/react-syntax-highlighter.js",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Map CSS imports to a mock
  },
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": ["ts-jest", { tsconfig: "tsconfig.json" }],
  },
  // CodeBlock patches the refractor grammar (see components/code-block/
  // prism-grammar.ts). refractor and its hast/parse-entities dependencies are
  // ESM-only, so they have to be transformed rather than skipped.
  transformIgnorePatterns: [
    `node_modules/(?!(${[
      "lodash-es",
      "@mui",
      "@babel/runtime",
      // refractor and every ESM package in its dependency closure.
      "refractor",
      "character-entities",
      "character-entities-legacy",
      "character-reference-invalid",
      "comma-separated-tokens",
      "decode-named-character-reference",
      "hast-util-parse-selector",
      "hastscript",
      "is-alphabetical",
      "is-alphanumerical",
      "is-decimal",
      "is-hexadecimal",
      "parse-entities",
      "property-information",
      "space-separated-tokens",
    ].join("|")})/)`,
  ],
  modulePathIgnorePatterns: ["<rootDir>/dist/"], // Ignore the dist directory to avoid Haste module naming collisions
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"], // Ensure test files are matched
};
