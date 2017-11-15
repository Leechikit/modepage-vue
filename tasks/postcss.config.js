module.exports = {
    parser: 'postcss-scss',
    plugins: {
        'postcss-import': {},
        'postcss-px2rem': {
            remUnit: 75
        },
        'postcss-cssnext': {
            warnForDuplicates: false
        },
        'cssnano': {}
    }
}