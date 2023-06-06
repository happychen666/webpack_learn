// module.exports = function (source) {
//   return source.replace(/World/g, "Loader");
// };

module.exports = function (source) {
  const options = this.query;
  return source.replace(/World/g, options.text);
};
