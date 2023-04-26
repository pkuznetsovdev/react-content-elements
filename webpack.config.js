const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PATHS = {
    ENTRY: './src/index.ts',
    ENTRY_STYLES: './src/core/styles/index.scss',
    OUTPUT: './dist',
}

const WEBPACK = {
    outputFileName: 'bundle.js',
}

module.exports = {
    entry: [PATHS.ENTRY, PATHS.ENTRY_STYLES],
    mode: 'production',
    target: 'web',
    output: {
        publicPath: "/dist",
        path: path.resolve(__dirname, PATHS.OUTPUT),
        filename: WEBPACK.outputFileName,
        clean: true,
        library: 'RCE',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.jsx', '.js', '.scss' ],
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
                        presets: [ '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript' ],
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpe?g|png|svg|ttf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CopyPlugin({
            patterns: [
                // { from: './README.md' },
                // { from: './package.json' },
                {
                    from: '**/*',
                    context: path.resolve(__dirname, 'src', 'core/styles/utils'),
                    to: 'styles',
                },
            ],
        }),
    ],
    externals: {
        "React": "react",
        "ReactDOM": "react-dom"
    },
}