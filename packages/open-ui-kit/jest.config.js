const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig.json");

module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths || {}, {
      prefix: "<rootDir>/",
    }),
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Map CSS imports to a mock
  },
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": ["ts-jest", { tsconfig: "tsconfig.json" }],
  },
  transformIgnorePatterns: [
    "node_modules/(?!(lodash-es|@mui|@babel/runtime)/)",
  ],
  modulePathIgnorePatterns: ["<rootDir>/dist/"], // Ignore the dist directory to avoid Haste module naming collisions
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"], // Ensure test files are matched
};
