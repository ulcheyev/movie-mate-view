import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist, node_modules"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "eslint-jsx-a11y": eslintPluginJsxA11y,
      "eslint-import": eslintPluginImport,
      "eslint-prettier": eslintPluginPrettier,
      "eslint-config-prettier": eslintConfigPrettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "all",
        },
      ],
      "eslint-prettier/prettier": "error",
      semi: ["warn", "always"],
    },
  }
);
