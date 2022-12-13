module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    // More on TypeScript ESLint configuration: https://typescript-eslint.io/docs/
    'plugin:@typescript-eslint/recommended',
    // More on React ESLint configuration: https://github.com/jsx-eslint/eslint-plugin-react
    'plugin:react/recommended',
    // More on React hooks ESLint configuration: https://reactjs.org/docs/hooks-rules.html
    'plugin:react-hooks/recommended',
    // More on Prettier ESLint configuration: https://prettier.io/docs/en/integrating-with-linters.html
    'plugin:prettier/recommended',
  ],
  env: { browser: true, node: true },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
      '@typescript-eslint',
      'react',
      'react-hooks'
  ],
};
