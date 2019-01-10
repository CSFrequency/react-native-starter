module.exports = {
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  plugins: ['flowtype', 'prettier'],
  env: {
    es6: true,
  },
  rules: {
    // The eslint import resolver doesn't work well with module aliases
    // so use Flow to report on any missing imports instead
    'import/no-unresolved': 0,

    // This eslint rule causes issues with components called `Link`
    // within React Native
    'jsx-a11y/anchor-is-valid': 0,

    // This is disabled to allow styles to be defined at the end of files
    'no-use-before-define': 0,

    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
      },
    ],

    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react/sort-comp': [
      2,
      {
        order: [
          'static-methods',
          'type-annotations',
          'lifecycle',
          'render',
          'everything-else',
        ],
      },
    ],
  },
};
