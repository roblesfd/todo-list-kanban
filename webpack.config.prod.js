const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode:"production",
    entry: './src/index.js',
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean:true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App Production',
            filename: 'index.html',
            template: 'src/template.html',
        })
    ]
}