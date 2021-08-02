const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyWebpack = require('copy-webpack-plugin');

module.exports = {

    mode: 'development',
    output: {
        clean: true,
    },
    module: {
        rules: [{
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false,
                    minimize: false,
                },
            },
            {
                test: /\.css$/i,
                exclude: /style.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtract.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                type: 'asset/resource',
                //loader: 'file-loader',
            }
        ]
    },
    optimization: {},
    plugins: [
        new HtmlWebpack({
            template: './src/index.html',
            filename: './index.html',
        }),
        new MiniCssExtract({
            filename: '[name].css',
            ignoreOrder: false,
        }),
        new CopyWebpack({
            patterns: [{
                from: 'src/assets/',
                to: 'assets/'
            }]
        }),
    ],
}