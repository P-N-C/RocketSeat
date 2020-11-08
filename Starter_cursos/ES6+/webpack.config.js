module.exports = {
    entry: './Webpack Server/main.js',
    output: {
        path: __dirname + '/Webpack Server',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                }
            }            
        ],
    },
};