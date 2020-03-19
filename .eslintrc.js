module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'import/extensions': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.ts', '.tsx'] }],
    'react/forbid-prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-wrap-multilines': 'off',
    'no-console': [1, { allow: ['warn', 'error'] }],
    'one-var': 'off',
    'import/prefer-default-export': 'off',
    'no-case-declarations': 'off',
    'no-underscore-dangle': 'off',
    'import/no-mutable-exports': 'off',
    'import/no-named-as-default': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-empty': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/require-default-props': 'off',
    camelcase: 'off',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    __DEV__: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
