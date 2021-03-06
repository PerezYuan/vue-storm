var path = require('path'); //node自带的path模块
var config = {
    entry: {
        tutorail: path.resolve(__dirname, 'src', 'tutorail.js'),
        computed: path.resolve(__dirname, 'src', 'computed.js'),
        classStyle: path.resolve(__dirname, 'src', 'classStyle.js'),
        conditional: path.resolve(__dirname, 'src', 'conditional.js'),
        list: path.resolve(__dirname, 'src', 'list.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    }
}

module.exports = config