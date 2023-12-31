module.exports = {
    root: true,
    env: {
        es2021: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/airbnb',
    ],
    rules: {
        'no-plusplus': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-alert': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'linebreak-style': 0,
        'import/extensions': [
            'off',
            'ignorePackages',
        ],
        'no-restricted-syntax': [
            'off',
            'ignorePackages',
        ],
        'no-restricted-globals': [
            'off',
            'ignorePackages',
        ],
        indent: ['warn', 4],
        'vuejs-accessibility/label-has-for': [
            'error',
            {
                components: ['VLabel'],
                controlComponents: ['VInput'],
                required: {
                    every: ['id'],
                },
                allowChildren: false,
            },
        ],
        'vuejs-accessibility/media-has-caption': ['off'],
    },
};
