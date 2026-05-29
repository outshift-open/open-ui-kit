module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    project: "./tsconfig.eslint.json",
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  ignorePatterns: [
    'tsup.config.ts',
    '.eslintrc.cjs',
    'jest.config.js',
    'scripts/**',
    'dist/**',
    'rollup.config.js',
    'rollup.config.mjs'
  ],
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx']
    }
  ],
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:storybook/recommended"
  ],
  plugins: ["react", "@typescript-eslint"],
};
