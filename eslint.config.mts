import globals from 'globals';
import eslintPluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.node,
    },
    ignores: ["node_modules", "dist"],
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...eslintPluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      "no-unused-expressions": "error",
      "prefer-const": "error",
      "no-console": "warn",
      "no-undef": "error",
      "no-unused-vars": "error",
    },
  },
];