const webpackMerge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const configMode = (mode) => {
    return require('./webpack-utils/webpack.' + mode + '.js');
}

module.exports = (env) => {
    const mode = env ? env.mode : 'development';
    return webpackMerge({
        entry: {
            'jquery': './src/js/jquery.js',
            'index': './src/js/index.js',
            'about': './src/js/about.js',
            'product': './src/js/product.js',
            'news': './src/js/news.js',
            'joinUs': './src/js/joinUs.js'
        },
        output: {
            path: __dirname + "/dist",
            filename: '[name].js',
        },
        module: {
            rules: [{
                    test: /\.(jpg|jpge|png|gif)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '../../src/images'
                        }
                    }]
                },
                {
                    test: /\.scss$/,
                    use: [{
                            loader: MiniCssExtractPlugin.loader,
                        },
                        'css-loader', 'sass-loader'
                    ]
                },
                {
                    test: require.resolve('jquery'),
                    use: [{
                        loader: 'expose-loader',
                        options: '$'
                    }]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'src/css/[name].css'
            }),
        ]
    }, configMode(mode))
}