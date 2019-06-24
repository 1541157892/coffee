const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: 'production',
    output: {
        filename: 'src/js/[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/index.html',
            chunks: ['jquery', 'index'],
            chunksSortMode: 'manual'
        }),
        new HtmlWebpackPlugin({
            filename: 'src/template/about.html',
            template: './src/template/about.html',
            chunks: ['jquery', 'about'],
            chunksSortMode: 'manual'
        }),
        new HtmlWebpackPlugin({
            filename: 'src/template/product.html',
            template: './src/template/product.html',
            chunks: ['jquery', 'product'],
            chunksSortMode: 'manual'
        }),
        new HtmlWebpackPlugin({
            filename: 'src/template/news.html',
            template: './src/template/news.html',
            chunks: ['jquery', 'news'],
            chunksSortMode: 'manual'
        }),
        new HtmlWebpackPlugin({
            filename: 'src/template/joinUs.html',
            template: './src/template/joinUs.html',
            chunks: ['jquery', 'joinUs'],
            chunksSortMode: 'manual'
        }),
        new CopyWebpackPlugin([{
            from: './src/images',
            to: 'src/images'
        }])
    ]
}