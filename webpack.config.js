const path = require('path');
const SassBundleWebpackPlugin = require('sass-bundle-webpack-plugin');

const PATHS = {
    ENTRY: './src/index.ts',
    OUTPUT: './dist'
};

const WEBPACK = {
    outputFileName: 'bundle.js',
};

module.exports = {
    entry: PATHS.ENTRY,
    mode: "production",
    target: "web",
    output: {
        path: path(__dirname, PATHS.OUTPUT),
        filename: WEBPACK.outputFileName,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript"]
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                ],
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
            {
                test: /\.(jpe?g|png|svg|ttf)$/i,
                type: "asset/resource",
            },
        ]
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