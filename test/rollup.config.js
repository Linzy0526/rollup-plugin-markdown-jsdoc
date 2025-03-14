const markdownJsdocPlugin = require('../index.js').default;

export default {
    input: './test/index.js',
    output: [{
        file: './test/dist/bundle.js',
        format: 'es'
    }],
    plugins: [
        markdownJsdocPlugin({
            outputPath: './test/dist/api-docs.md',
            exclude: ['node_modules'],
        })
    ]
}