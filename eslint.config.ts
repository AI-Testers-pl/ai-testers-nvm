import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';

export default [
  { files: ['**/*.{js,ts}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  playwright.configs['flat/recommended'],
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      sourceType: 'module',
      parserOptions: {
        ecmaVersion: 'latest',
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/typedef': [
        'error',
        { propertyDeclaration: true, variableDeclaration: true, variableDeclarationIgnoreFunction: true },
      ],
      '@typescript-eslint/no-unused-vars': 'error',
      'no-unused-vars': 'error',
      'max-params': ['error', 4],
      'no-case-declarations': 'error',
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: ['class', 'function'] },
        { blankLine: 'always', prev: '*', next: 'return' },
      ],
      'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
      'spaced-comment': ['error', 'always'],
      'no-console': 'error',
      'require-await': 'error',
      semi: ['error', 'always'],
      quotes: ['error', 'single', { avoidEscape: true }],
      'prefer-const': ['error', { destructuring: 'all', ignoreReadBeforeAssign: false }],
      'no-var': 'warn',
      'prefer-destructuring': [
        'error',
        { VariableDeclarator: { array: false, object: true }, AssignmentExpression: { array: true, object: false } },
        { enforceForRenamedProperties: false },
      ],
      'playwright/no-force-option': 'error',
      'playwright/require-top-level-describe': ['error', { maxTopLevelDescribes: 2 }],
      'playwright/expect-expect': 'error',
      'playwright/no-conditional-in-test': 'error',
      'playwright/no-standalone-expect': 'error',
      'playwright/no-wait-for-timeout': 'error',
      'playwright/no-wait-for-selector': 'error',
    },
  },
  {
    ignores: ['node_modules/**/*', 'playwright-report/**/*', 'test-results/**/*'],
  },
];
