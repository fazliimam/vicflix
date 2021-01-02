/** @type {import("eslint").} */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  globals: {
    NodeJS: 'readonly',
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: true,
    },
    useJSXTextNode: true,
    extraFileExtensions: ['.vue'],
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:vue/essential',
    'plugin:nuxt/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'no-console': 'off',
    'dot-notation': 'off',
    'prefer-const': 'off',
    'prefer-promise-reject-errors': 'off',
    'require-await': 'off',
    'no-new': 'off',
    'no-unused-vars': 'off',
    'no-var': 'off',
    'import/order': 'warn',
    'no-useless-constructor': 'off',
    'no-debugger': 'off',
    'no-void': 'off',
    'import/named': 'off',
    'prettier/prettier': 'warn',
    camelcase: 'off',
    'import/first': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['off', { typedefs: false }],
    'lines-between-class-members': 'off',
    'vue/require-component-is': 'off',
    'vue/valid-template-root': 'off',
    'vue/no-unused-vars': 'off',
    'vue/no-v-html': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
};
