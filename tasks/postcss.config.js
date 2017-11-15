module.exports = {
    parser: 'postcss-scss',
    plugins: {
        'postcss-import': {},
        'postcss-cssnext': {},
        'postcss-px2rem': {
            remUnit: 75
        },
        'cssnano': {}
    }
}