module.exports = {
  plugins: [require.resolve('prettier-plugin-astro')],
  useTabs: false,
  singleQuote: false,
  trailingComma: 'all',
  arrowParens: 'avoid',
  overrides: [
    {
      files: '**/*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
