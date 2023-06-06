module.exports = function (source) {
  const callback = this.async();
  console.log("模拟loader中的异步");
  setTimeout(() => {
    const output = source.replace(/World/g, "Webpack4");
    callback(null, output);
    console.log("22");
  }, 10000);
};
