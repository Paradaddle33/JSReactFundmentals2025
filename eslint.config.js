import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
    },
    rules: {
      indent: ["off", 2, { SwitchCase: 1 }],
      "linebreak-style": ["off", "unix"],
      "no-alert": "off",
      "no-console": "off",
      "no-empty": "warn",
      "no-unused-vars": "off",
      quotes: ["off", "double"],
      semi: ["warn", "always"],
    },
  },
];
