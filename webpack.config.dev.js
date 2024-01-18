const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    devtool: 'inline-source-map',
    devServer: {
        hot:true,
        open:true,
        watchFiles: ['src/**/*']
    },
    optimization: {
        runtimeChunk: 'single',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: 'src/template.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, "src"),
                use: ["style-loader", "css-loader", "postcss-loader"]
            }
        ]
    }

}