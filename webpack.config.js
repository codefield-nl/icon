const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    plugins: [
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({filename: 'main.[chunkhash].css'}),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        })
    ],
    module: {
        rules: [{
            test: /\.(ts|tsx)$/,
            loader: 'ts-loader',
            include: [path.resolve(__dirname, 'src')],
            exclude: [/node_modules/],
            options: {
                transpileOnly: true
            }
        },
            {
                test: /\.(svg)$/i,
                loader: 'file-loader',
                options: {
                    publicPath: 'assets',
                },
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
}
