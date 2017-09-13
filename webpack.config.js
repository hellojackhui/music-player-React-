var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
	//webpack-dev-server的加载
	entry:[
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		//react热更新，局部修改页面
		'react-hot-loader/patch',
		path.join(__dirname,'app/index.js')
	],
	output: {
        path:path.join(__dirname,'/dist/'),
        filename: '[name].js',
		publicPath:'/'
    },
    plugins: [
    	//渲染html模板自动生成新的html
    	new HtmlWebpackPlugin({
			template:'./index.tpl.html',
			inject:'body',
			filename:'./index.html'
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV':JSON.stringify('development')
		})
	],
    module: {
		loaders:[
			{
				//所有以js为尾的文件
				test:/\.js$/,
				//exclude:哪些文件夹不需要处理
				//node_modules:node_modules下用npm装的依赖库不需处理
				exclude:/node_modules/,
				loaders:"babel-loader",
				query:
					{
						presets:['react','es2015']
					}
			},
					{
				test:/\.css$/,
				loaders:"style!css"
					},
					{
                test:/\.less/,
                loaders:'style-loader!css-loader!less-loader'
					}
		]
	}
}