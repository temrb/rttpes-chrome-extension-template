/** @type {import("eslint").Linter.Config} */
const config = {
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'project': true
    },
    'plugins': [
        '@typescript-eslint',
        'eslint-config-prettier',
        'prettier'
    ],
    'extends': [
        'plugin:@typescript-eslint/recommended-type-checked', 'plugin:prettier', 'plugin:eslint-config-prettier'
    ],
    'rules': {
        'quotes': [
            'error',
            'single',
            {
                'avoidEscape': true,
                'allowTemplateLiterals': true,
            }
        ],
        'semi': [
            'error',
            'always'
        ],
        'no-multi-spaces': [
            'error',
            {
                'ignoreEOLComments': true
            }
        ],
        'no-multiple-empty-lines': [
            'error',
            {
                'max': 1,
                'maxEOF': 1,
                'maxBOF': 0
            }
        ],
        'no-trailing-spaces': [
            'error',
        ],
        '@typescript-eslint/array-type': 'off',
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/consistent-type-imports': [
            'warn',
            {
                'prefer': 'type-imports',
                'fixStyle': 'inline-type-imports'
            }
        ],
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                'argsIgnorePattern': '^_'
            }
        ],
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/no-misused-promises': [
            'error',
            {
                'checksVoidReturn': {
                    'attributes': false
                }
            }
        ]
    }
};
module.exports = config;