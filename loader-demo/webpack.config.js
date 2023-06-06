const path = require("path");
module.exports = {
  entry: "./src/index",
  target: "node", // 编译为Node.js环境下的JS，之后直接使用Node.js执行编译完成的文件
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "replace-loader",
      },
    ],
  },
  resolveLoader: {
    modules: ["./node_modules", "./loader"], // 配置loader的查找目录
  },
};
