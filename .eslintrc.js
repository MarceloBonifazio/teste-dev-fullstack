module.exports = {
  extends: [
    'airbnb',
    'plugin:css-modules/recommended',
    'prettier/react',
    'plugin:jest/recommended',
  ],
  parser: 'babel-eslint',
  globals: {
    workbox: true,
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.json'],
      },
    },
  },
  plugins: ['react', 'css-modules', 'import', 'prettier', 'jest'],
  rules: {
    indent: 'off',
    'no-plusplus': 'off',
    'no-console': 'error',
    'operator-linebreak': 'off',
    'no-else-return': 'off',
    'implicit-arrow-linebreak': 'off',
    'space-before-function-paren': 'off',
    'react/jsx-no-undef': ['error', { allowGlobals: true }],
    'import/no-unresolved': ['error', { ignore: ['\\.(png|jpg|svg)\\?(.*)$'] }],
    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'object-curly-newline': 'off',
    'no-param-reassign': 'off',
    'consistent-return': 'off',
    'no-confusing-arrow': 'off',
    'global-require': 'off',
    'function-paren-newline': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'react/destructuring-assignment': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: { array: false, object: true },
        AssignmentExpression: { array: false, object: false },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: ['CustomInputLabel'],
        labelAttributes: ['label'],
        controlComponents: ['CustomInput'],
        depth: 3,
      },
    ],
    'prettier/prettier': 'error',
  },
};
