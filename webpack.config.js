const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: './src/index.css',
    allChunks: true,
});


module.exports = {
    entry: ["./src/index.js", './src/index.scss'],
    output: {
        path: __dirname,
        filename: "./src/bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: 'css-loader',
                    }, {
                        loader: 'sass-loader',
                    }],
                }),
            }
        ]
    },
    plugins: [extractSass]

};
