const base = require("./jest.config.js");
module.exports = { ...base, rootDir: __dirname, collectCoverage: false,
  transform: { "^.+\\.(ts|tsx|js|jsx)$": ["ts-jest", { tsconfig: "tsconfig.json", diagnostics: false }] } };
