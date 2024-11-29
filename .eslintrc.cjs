module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh',"react-hooks"],
  rules: {
    'react-refresh/only-export-components': [
      'off',
      { allowConstantExport: true },
    ],
    "no-unused-vars": ["off", { "caughtErrors": "none" }],
    "@typescript-eslint/no-unused-vars": ["off", { "caughtErrors": "none" }],
    "@typescript-eslint/no-explicit-any": ["off", { "caughtErrors": "none" }],
    "prefer-const": ["off", { "caughtErrors": "none" }],
    "react-hooks/exhaustive-deps": 0,
    
  },
}
