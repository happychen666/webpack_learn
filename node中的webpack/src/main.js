require("./main.css");
// 加载logo.gif文件
const logo = require("./logo.png");
document.querySelector("#btn").addEventListener(
  "click",
  function () {
    alert("Hello World");
  },
  false
);
// 获取图片元素节点，手动设置图片链接。
document.querySelector("#logo").src = logo;
