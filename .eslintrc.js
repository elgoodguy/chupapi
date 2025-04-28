module.exports = {
  root: true,
  // This tells ESLint to load the config from the package
  extends: ["eslint:recommended", "prettier"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
      ],
      rules: {
        "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
  ],
  env: {
    node: true,
    browser: true,
    es2022: true,
  },
  ignorePatterns: [
    "node_modules/",
    "dist/",
    ".turbo/",
    ".next/",
    "coverage/",
    "build/"
  ]
};
