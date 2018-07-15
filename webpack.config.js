// Webpack is great for use during development,
// That's why I included it here. Generally users will only need ExpressJS though.

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Let the plugin know where our html file is (template)
// and tell it where to output (filename)
// This will inject the script tag with the name we set here into our HTML file
const plugin = new HtmlWebpackPlugin({
    template: "./app/index.html",
    filename: "./index.html"
})

module.exports = {
    entry: './app/components/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // Here we define our specific loaders to tell Webpack what
    // to use when bundling our code (JS,HTML,CSS)
    module: {
        rules: [
            // JAVASCRIPT
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            },
            {
                test: /\.png$/,
                use: ["url-loader"]
                
            },
            {
                test: /\.jpg$/,
                use: [ "file-loader"]
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader']
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: [ 'url-loader']
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader']
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [ 'url-loader']
            }
        ]
    },
    // Need this to bypass upstream issue with react-bootstrap-slider package
    // There's no need to pull in entire jQuery if it's not used.
    resolve: {
        alias: {
            "jquery": path.join(__dirname, "./jquery-stub.js")
        }
    },
    plugins: [plugin]
}