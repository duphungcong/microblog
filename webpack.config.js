const path = require('path');


module.exports = {
    entry: {
        style: './app/static/src/scss/all.scss'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './app/static/dist'),
        publicPath: '/static/dist',
    },
    devServer: {
        contentBase: path.join(__dirname, './app/'),
        publicPath: '/static/dist/',
        watchContentBase: true,
        port: 9000,
        proxy: {
            '!(/static/dist/**/**.*)': {
                target: 'http://127.0.0.1:5000',
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(s*)css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    }
};

