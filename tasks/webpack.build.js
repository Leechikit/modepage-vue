var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var config = require('./config').default;
var publicPath = config.publicPath;
var outputPath = config.outputPath;

module.exports = {
    //插件项
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'html/index.html',
            template: 'src/html/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin('common'),
        //生成独立样式文件
        new ExtractTextPlugin("css/[name].bundle.css")
    ],
    //页面入口文件配置
    entry: getEntry(),
    //入口文件输出配置
    output: {
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[name].js',
        path: path.join(__dirname, outputPath),
        publicPath: publicPath
    },
    module: {
        //加载器配置
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: 'tasks/postcss.config.js'
                            }
                        }
                    },
                    'sass-loader'
                ]
            })
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    prefix: 'img'
                }
            }, {
                loader: 'file-loader?name=image/[name].[ext]?[hash]'
            }]
        }, {
            test: /\.vue$/,
            use: [
                'vue-loader'
            ]
        }, {
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['env'],
                    plugins: ['transform-runtime']
                }
            }]
        }]
    },
    //其它解决方案配置
    resolve: {
        extensions: ['.js', '.json', '.scss'],
        alias: config.alias
    },
    externals: config.global
};

function getEntry() {
    var jsPath = path.resolve('src');
    var dirs = fs.readdirSync(jsPath);
    var matchs = [], files = {};
    dirs.forEach(function (item) {
        matchs = item.match(/(.+)\.js$/);
        if (matchs) {
            files[matchs[1]] = path.resolve('src', item);
        }
    });
    return files;
}