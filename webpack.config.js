
// const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/es_2015.js',
    },
    output: {
        path: __dirname + '/static/dist',     //输出地址要写一个绝对地址
        filename: "[name].bundle.js",
    },
    optimization:{
        splitChunks:{
            cacheGroups:{
                vendor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendor',
                    priority: 10,
                    enforce: true,
                }
            }
        }
    }
}