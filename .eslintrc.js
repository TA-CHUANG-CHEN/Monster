module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    es6: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': [0],
    'import/extensions': 'off',
  },
  settings: {
    react: {
      version: '999.999.999',
    },
  },
}
