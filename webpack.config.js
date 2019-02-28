const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: path.join(__dirname, 'src', 'index')
    },

    output: {
        library: 'ReactUtilsInput',
        libraryTarget: 'umd',
        path: path.join(__dirname, 'dist'),
        filename: 'index.js'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/,
                include: path.join(__dirname, 'src')
            }
        ]
    },

    resolve: {
        modules: ['node_modules']
    },

    plugins: [
        new CleanPlugin('./dist')
    ]
};
