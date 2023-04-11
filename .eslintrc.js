module.exports = {
  extends: ['plugin:vitest-globals/recommended', 'plugin:react/recommended', 'xo'],
  env: {
    browser: true,
    node: true,
    'vitest-globals/env': true,
  },
  overrides: [
    {
      extends: ['xo-typescript', 'prettier'],
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'spaced-comment': 'error',
    quotes: ['error', 'single'],
    'no-duplicate-imports': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'off',
  },
  settings: {
    'import/resolver': 'typescript',
    react: {
      version: 'detect',
    },
  },
};
