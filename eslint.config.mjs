import { dirname } from 'path';
import prettier from 'eslint-plugin-prettier';
import { fileURLToPath } from 'url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import { defineConfig } from 'eslint/config';
import jest from 'eslint-plugin-jest';
import unusedImports from 'eslint-plugin-unused-imports';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = defineConfig([
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/strict',
    'plugin:@typescript-eslint/stylistic',
    'plugin:prettier/recommended',
    'prettier',
  ),
  {
    plugins: { prettier, jest, 'unused-imports': unusedImports },
    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      'import/prefer-default-export': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      'prettier/prettier': 'error',
      'arrow-body-style': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': [
        2,
        {
          skipUndeclared: true,
        },
      ],

      'react/jsx-props-no-spreading': 'off',
      'react/jsx-filename-extension': [
        1,
        { ignoreFilesWithoutCode: true, extensions: ['.tsx'] },
      ],
      'jest/no-disabled-tests': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: false,
        },
      ],
      '@typescript-eslint/no-empty-function': [
        'error',
        {
          allow: ['arrowFunctions'],
        },
      ],
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
    ignores: ['eslint.config.mjs', 'postcss.config.mjs', 'jest.config.js'],
  },
]);

export default eslintConfig;
