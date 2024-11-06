import { fileURLToPath } from 'url';
import { dirname } from 'path';
import globals from 'globals';
import reactRefresh from 'eslint-plugin-react-refresh';
import unusedImports from 'eslint-plugin-unused-imports';
import typescriptEslintParser from '@typescript-eslint/parser';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default [
  {
    files: ['src/**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
      parser: typescriptEslintParser,
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
      },
    },
    settings: { react: { version: '18.2' } },
    plugins: {
      'react-refresh': reactRefresh,
      'unused-imports': unusedImports,
      '@typescript-eslint': typescriptEslintPlugin,
    },
    rules: {
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'unused-imports/no-unused-imports': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-expressions': 'off',
      'react/prop-types': 'off',
    },
    ignores: ['dist', 'node_modules'],
  },
];
