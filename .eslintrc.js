module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'jest': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:i18next/recommended'
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
    },
    {
      'files': [ '**/src/**/*.test.{ts,tsx}' ],
      'rules': {
        'i18next/no-literal-string': 'off'
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
    'react',
    'i18next'
  ],
  'rules': {
    'indent': [ 2, 2 ],
    'linebreak-style': [ 2, 'windows' ],
    'quotes': [ 2, 'single' ],
    'semi': [ 2, 'always' ],
    'react/jsx-indent': [ 2, 2 ],
    'react/no-deprecated': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-indent-props': [ 2, 2 ],
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-declaration': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'import/extensions': 'off',
    'no-underscore-dangle': 'off',
    'i18next/no-literal-string': [
      'error',
      {
        'markupOnly': true,
        'ignoreAttribute': [ 'data-testid', 'to' ]
      }
    ],
    'max-len': [ 'error', { 'code': 120, 'ignoreComments': true } ],
    'object-curly-spacing': [ 2, 'always' ],
    'array-bracket-spacing': [ 2, 'always' ],
    'react/self-closing-comp': [ 2, { 'component': true , 'html': true } ],
    'react/display-name': 'warn'
  },
  'globals': {
    '__IS__DEV__': true
  },
};
