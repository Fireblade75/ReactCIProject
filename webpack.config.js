const express = require('express');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: [__dirname + '/client/client.js'],
    },
    output: {
        filename: 'bundle.js',
        publicPath: 'http://localhost:3000/assets',
        path: __dirname + '/public/assets/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'stage-0', 'env']
                    }
                }
            },
            {
                test: /\.(css|sass|scss)$/,
                exclude: /(node_modules)/,
                use: ['style-loader', 'css-loader?url=false', 'sass-loader']
            },
        ]
    },
    resolve: {
      extensions: [".js", ".jsx", ".scss", ".sass"],
    }
}