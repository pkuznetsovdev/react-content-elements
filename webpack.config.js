const path = require('path');
const SassBundleWebpackPlugin = require('sass-bundle-webpack-plugin');

module.exports = {
    entry: "./src/index.ts",
    mode: "production",
    module: {
        rules: [
            { test: /\.scss$/, use: [ "style-loader", "css-loader", "sass-loader" ] },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.scss']
    },
    plugins: [
        new SassBundleWebpackPlugin({
            file: path.join(__dirname, 'src/core/styles/utils/index.scss'),
            type: 'sass',
            output: {
                name: 'utils'
            },
        }),
    ],
}