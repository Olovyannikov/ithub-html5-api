import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import parserTs from '@typescript-eslint/parser';
import hooks from 'eslint-plugin-hooks';
import _import from 'eslint-plugin-import';
import jsxA11Y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    {
        ignores: [
            '**/dist',
            '**/.eslintrc.cjs',
            '**/package.json',
            'build',
            '**/node_modules',
            '**/webpack.config.ts',
            '**/vite.config.ts',
            '**/*.d.ts',
            '**/ssr.config.ts',
            '**/workbox-*',
            '**/sw.js',
        ],
    },
    ...fixupConfigRules(
        compat.extends(
            'eslint:recommended',
            'plugin:react-hooks/recommended',
            'ts-react-important-stuff',
            'eslint:recommended',
            'plugin:react/recommended',
            'plugin:react/jsx-runtime',
            'plugin:jsx-a11y/recommended',
            'plugin:import/typescript',
            'prettier'
        )
    ),
    {
        plugins: {
            react: fixupPluginRules(react),
            'react-hooks': fixupPluginRules(reactHooks),
            'jsx-a11y': fixupPluginRules(jsxA11Y),
            import: fixupPluginRules(_import),
            '@stylistic/ts': stylisticTs,
            hooks,
            'simple-import-sort': simpleImportSort,
            'react-refresh': reactRefresh,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },

            parser: parserTs,
            ecmaVersion: 'latest',
            sourceType: 'module',

            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },

        settings: {
            react: {
                pragma: 'React',
                version: 'detect',
            },
        },

        rules: {
            'react-refresh/only-export-components': [
                'off',
                {
                    allowConstantExport: true,
                },
            ],

            'no-empty': 'warn',
            'no-else-return': 'warn',
            'no-nested-ternary': 'warn',
            'no-use-before-define': 'warn',
            'no-useless-computed-key': 'warn',
            'no-unsafe-optional-chaining': 'warn',

            'no-param-reassign': [
                'error',
                {
                    props: false,
                },
            ],

            'no-console': [
                'warn',
                {
                    allow: ['warn', 'error'],
                },
            ],

            'no-unused-vars': 'warn',
            'no-implicit-coercion': 'error',
            'arrow-body-style': ['warn', 'as-needed'],
            'default-case': 'error',
            'default-param-last': 'error',
            'object-curly-spacing': ['warn', 'always'],
            'prefer-const': 'error',
            'jsx-a11y/label-has-associated-control': 'off',
            'jsx-a11y/no-autofocus': 'off',

            'hooks/sort': [
                'error',
                {
                    groups: [
                        'useReducer',
                        'useContext',
                        'useRef',
                        'useState',
                        'useDispatch',
                        'useCallback',
                        'useEffect',
                    ],
                },
            ],

            'react/jsx-curly-brace-presence': [
                'error',
                {
                    props: 'never',
                    children: 'never',
                },
            ],

            'react/prop-types': 'off',
            'react/jsx-no-constructed-context-values': 'error',

            'react/function-component-definition': [
                'error',
                {
                    namedComponents: 'arrow-function',
                },
            ],

            'react/jsx-fragments': ['error', 'syntax'],
            'react/react-in-jsx-scope': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'off',
            '@stylistic/ts/no-unused-vars': 'off',

            'import/no-cycle': 'warn',
            'import/no-default-export': 'warn',
            'import/prefer-default-export': 'off',
            'import/no-named-as-default-member': 'off',
            'import/no-duplicates': 'off',
            'space-before-function-paren': 'off',
            'no-underscore-dangle': 'off',
            'arrow-parens': ['error', 'always'],

            '@stylistic/ts/quotes': [
                'error',
                'single',
                {
                    avoidEscape: true,
                    allowTemplateLiterals: true,
                },
            ],

            'react/jsx-first-prop-new-line': [2, 'multiline'],

            'react/jsx-max-props-per-line': [
                2,
                {
                    maximum: 1,
                    when: 'multiline',
                },
            ],

            'react/jsx-indent-props': [
                2,
                {
                    indentMode: 4,
                },
            ],

            'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
            'jsx-a11y/no-static-element-interactions': 'off',
            'jsx-a11y/no-noninteractive-tabindex': 'off',

            'simple-import-sort/imports': [
                'warn',
                {
                    groups: [['^react', '^@?\\w'], ['^\\u0000@?\\w'], ['^@/\\w'], ['^\\.'], ['^.+\\.?(css)$']],
                },
            ],
        },
    },
    {
        files: ['src/pages/**/*', 'src/app/**/*', '**/*.async.tsx'],

        rules: {
            'import/no-default-export': 'off',

            'react/function-component-definition': [
                'error',
                {
                    namedComponents: 'function-declaration',
                },
            ],
        },
    },
];
