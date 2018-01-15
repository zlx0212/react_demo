var path = require('path');


var config = {
    entry: path.resolve(__dirname, 'app/main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
	module: {
	    loaders: [{
		    test: /\.(js|jsx)$/,  // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
		    loader: 'babel-loader', // 加载模块 "babel" 是 "babel-loader" 的缩写
			exclude: /node_modules/,
			query:
	      	{
	        	presets:['react']
	      	}
		}, 
		{
	        test: /\.css$/,
    		loader: 'style-loader!css-loader'
	    }]
	}
};

module.exports = config;
