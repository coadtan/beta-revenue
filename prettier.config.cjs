// https://prettier.io/docs/en/options.html
/** @type {import('prettier').RequiredOptions} */
module.exports = {
  trailingComma: 'all',
  bracketSpacing: true,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  printWidth: 90,
  arrowParens: 'always',
  tailwindConfig: './tailwind.config.cjs',
  plugins: [require('prettier-plugin-tailwindcss')],
}
