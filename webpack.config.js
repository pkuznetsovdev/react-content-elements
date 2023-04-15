const path = require('path');
const SassBundleWebpackPlugin = require('sass-bundle-webpack-plugin');

module.exports = {
    entry: "./src/index.ts",
    mode: "production",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.scss']
    },
    // plugins: [
    //     new SassBundleWebpackPlugin({
    //         file: path.join(__dirname, 'src/core/styles/utils/index.scss'),
    //         type: 'sass',
    //         output: {
    //             name: 'utils'
    //         },
    //     }),
    // ],
}