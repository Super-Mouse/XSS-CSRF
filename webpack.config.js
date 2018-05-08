
// const webpack = require('webpack');
module.exports = {
    entry: {
        app: './src/es_2015.js',
    },
    output: {
        path: __dirname + '/dist',     //输出地址要写一个绝对地址
        filename: "[name].bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
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