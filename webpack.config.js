module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    devtool: 'inline-source-map',
    devServer: {
    contentBase: './dist'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.min.js',
        }
    }
};