var webpack = require('webpack')
var path = require('path')
var autoprefixer = require('autoprefixer')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    context: path.join(__dirname, 'example'),
    entry: {
        js: './app.js',
        // vendor: ['react', 'classnames', 'react-router', 'react-dom', 'react-addons-css-transition-group']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundle.js'
    },
    module: {
        loaders:[
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel',
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('css!postcss!less')
            }, {
                test: /\.css/,
                loader: ExtractTextPlugin.extract('style', 'css', 'postcss')
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000'
            }, {
                test: /\.(eot|woff|ttf|svg)/,
                loader: 'file-loader?name=[name].[ext]'
            }
        ]
    },
    postcss: [autoprefixer],
    plugins: [
        new webpack.DefinePlugin({
            DEBUG: process.env.NODE_ENV !== 'production'
        }),
        new ExtractTextPlugin('cex.min.css'),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: {removeAll: true } },
            canPrint: true
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: false,
        //     mangle: false
        // }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'example/index.html')
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    ]
}
