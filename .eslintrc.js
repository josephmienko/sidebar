module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'jsx-a11y'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended', // Runs Prettier as an ESLint rule
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^React$',
        argsIgnorePattern: '^_',
      },
    ],
    'react-hooks/rules-of-hooks': 'error', // Enforce React Hooks rules
    'react-hooks/exhaustive-deps': 'warn', // Warn about missing dependencies in Hooks
    '@typescript-eslint/ban-ts-comment': 'error', // Disallow @ts-ignore comments
    'react/react-in-jsx-scope': 'off', // Not needed for React 17+
    'no-unused-vars': 'off', // Handled by @typescript-eslint/no-unused-vars
    'prettier/prettier': ['error'],
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
}
