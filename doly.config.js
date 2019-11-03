const path = require("path");

module.exports = {
  html: {
    title: "Doly Mobile Template",
    template: "src/document.ejs",
    filename: "index.html",
    minify: {
      removeComments: true,
      collapseWhitespace: true
    }
  },

  // 别名
  alias: {
    "~": path.join(__dirname, "./src")
  },

  // 扩展 babel-loader 的 plugins
  extraBabelPlugins: [
    ["import", { libraryName: "antd-mobile", style: true }],
    [
      "import",
      {
        libraryName: "@wonder-ui/core",
        libraryDirectory: "components",
        camel2DashComponentName: false
      },
      "@wonder-ui/core"
    ]
  ],
  cssInline: true,

  // 定义编译时变量替换
  define: {
    // api 地址
    API_URL: "",
    DEV: true
  },

  // 不同环境配置
  env: {
    // 生产环境
    production: {
      publicPath: "./",
      define: {
        API_URL: ""
      }
    }
  }
};
