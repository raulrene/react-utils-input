'use strict';

const path = require('path');

const config = {
    entry: path.join(__dirname, 'src', 'index.spec.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.spec.js'
    },

    // Some libs need to be set as externals for enzyme
    externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },

    resolve: {
        modules: ['node_modules']
    }
};

module.exports = config;
