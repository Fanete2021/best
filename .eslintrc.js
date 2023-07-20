module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint',
    'react'
  ],
  'rules': {
    'indent': [2, 2],
    'linebreak-style': [2, 'windows'],
    'quotes': [2, 'single'],
    'semi': [2, 'always'],
    'react/jsx-indent': [2, 2],
    'react/no-deprecated': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-indent-props': [2, 2],
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-declaration': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'import/extensions': 'off',
    'no-underscore-dangle': 'off'
  },
  'globals': {
    '__IS__DEV__': true
  },
};
