module.exports = {
    parser: 'postcss-scss',
    plugins: {
        'postcss-import': {},
        'postcss-cssnext': {
            warnForDuplicates: false
        },
        'postcss-px2rem': {
            remUnit: 75
        },
        'cssnano': {}
    }
}