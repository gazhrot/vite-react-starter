import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import stylistic from '@stylistic/eslint-plugin';
// 1. On importe le plugin React de base
import reactPlugin from 'eslint-plugin-react';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['src/**/*.{ts,tsx}', 'vite.config.ts'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: {
      '@stylistic': stylistic,
      'react': reactPlugin,
    },
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/array-element-newline': ['error', { multiline: true, minItems: 2 }],
      '@stylistic/array-bracket-newline': ['error', { multiline: true, minItems: 2 }],

      // --- 🎯 Guidelines Airbnb React ---
      
      // Airbnb impose le PascalCase pour les composants (ex: <MyComponent />)
      'react/jsx-pascal-case': ['error', { allowAllCaps: false }],

      // Airbnb interdit STRICTEMENT d'utiliser l'index d'un .map() comme "key" JSX
      'react/no-array-index-key': 'error',

      // Airbnb impose la fermeture automatique des balises vides (ex: <div /> au lieu de <div></div>)
      'react/self-closing-comp': ['error', { component: true, html: true }],

      // Airbnb impose le raccourci pour les boéleens (ex: <Input disabled /> au lieu de disabled={true})
      'react/jsx-boolean-value': ['error', 'never'],

      // Interdit les propriétés dupliquées dans un élément JSX (ex: <div className="a" className="b">)
      'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],

      // Airbnb impose l'utilisation des fragments courts (ex: <>...</> au lieu de <React.Fragment>...</React.Fragment>)
      'react/jsx-fragments': ['error', 'syntax'],

      // Sécurité : Airbnb interdit l'usage direct de dangerouslySetInnerHTML sans garde-fou
      'react/no-danger': 'error',

      // Évite les erreurs de rendu avec des caractères spéciaux mal échappés
      'react/no-unescaped-entities': 'error',

      // Airbnb impose de ne pas fermer les composants de manière étrange
      'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    },
    // Petit fix requis par le plugin React pour détecter automatiquement la version
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]);