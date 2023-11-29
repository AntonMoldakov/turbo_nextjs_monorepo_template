const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

module.exports = {
  extends: [
    '@vercel/style-guide/eslint/node',
    '@vercel/style-guide/eslint/browser',
    '@vercel/style-guide/eslint/typescript',
    '@vercel/style-guide/eslint/react',
    '@vercel/style-guide/eslint/next',
    'eslint-config-turbo',
    'airbnb',
  ].map(require.resolve),
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    '**/node_modules/',
    '**/dist/',
    '**/.eslintrc.js',
    '**/next.config.js',
    '**/storybook-static/',
  ],
  plugins: [
    'react',
    '@typescript-eslint',
    'unused-imports',
    'simple-import-sort',
    'import',
  ],
  rules: {
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'no-plusplus': 'off',
    'guard-for-in': 'off',
    'import/no-default-export': 'off',
    'react/function-component-definition': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-filename-extension': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-shadow': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'unused-imports/no-unused-imports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    'import/order': 'off',
    'react/no-unstable-nested-components': [
      'off',
      {
        allowAsProps: true,
        customValidators: [],
      },
    ],
  },
};
