module.exports = function (source) {
  console.log("source===", source);
  return source;
};

// 设置当前Loader为raw loader, webpack会将原始的Buffer对象 传入
module.exports.raw = true;
