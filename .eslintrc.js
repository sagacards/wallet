// Copyright 2021 @earthwallet/extension authors & contributors
// SPDX-License-Identifier: Apache-2.0

const base = require('@polkadot/dev/config/eslint.cjs');

module.exports = {
  ...base,
  ignorePatterns: [
    '.eslintrc.js',
    '.github/**',
    '.vscode/**',
    '.yarn/**',
    '**/build/*',
    '**/coverage/*',
    '**/node_modules/*',
  ],
  parserOptions: {
    ...base.parserOptions,
    project: ['./tsconfig.json'],
  },
  rules: {
    ...base.rules,
    // this seems very broken atm, false positives
    '@typescript-eslint/unbound-method': 'off',
    'space-before-function-paren': 'off',
      'jsx-quotes': 'off',
    
      "header/header": [2, "line", [{
			"pattern": " Copyright \\d{4}(-\\d{4})? @earthwallet/"
		}, " SPDX-License-Identifier: Apache-2.0"], 2],
  },
};
