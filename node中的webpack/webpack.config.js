const path = require("path");
module.exports = {
  //   entry: "./src/main",
  // 指定src目录为应用入口目录
  context: path.resolve(__dirname, "src"),
  //   entry: ["./main", "./second"],
  entry: {
    main: "./main",
    second: "./second",
  },
  // 入口文件
  output: {
    // 构建模式设置为开发模式
    // mode: "development",
    // 构建后的文件名
    // filename: "bundle.js",
    // 构建后文件的存放目录
    path: path.resolve(__dirname, "./build"),
  },
  module: {
    rules: [
      {
        // 以css结尾的文件应用下面的loader
        test: /\.css$/,
        // 使用css-loader和style-loader
        use: ["style-loader", "css-loader"],
      },
      {
        // 以  gif/png/jpg    结尾的文件应用 file-loader
        test: /\.(gif|png|jpg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]",
              // 构建文件名和目录设置, [name]和[ext]是占位符
              esModule: false,
              // 是否启用ES6模块系统，本项目未启用
              publicPath: "build", // 输出的根目录
            },
          },
        ],
      },
    ],
  },
};
