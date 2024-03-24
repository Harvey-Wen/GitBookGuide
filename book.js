module.exports = {

    // 书籍基本信息
    title: "Harvey's GitBook", // 书名
    author: "Harvey Wen", // 作者
  
    // 书籍元数据信息
    description: "The Book of Harvey Wen", // 描述
    isbn: "book NO.", // 国际标准书号
    author: "Harvey", // 作者（此处与上一行重复）
    publisher: "Harvey Wen", // 出版社
    year: "2017", // 出版年份
    language: "English", // 语言
    subject: "Harvey's Book", // 主题
    keywords: "Harvey Wen, book, book of Harvey Wen", // 关键词
    cover: "cover.jpg", // 封面图片文件名
    copyright: "Harvey Wen", // 版权声明
    license: "MIT", // 授权许可协议
    version: "1.0", // 版本号
    xref: "true", // 是否启用交叉引用（具体含义取决于应用场景）
  
    // 书籍封面（用于PDF导出）
    cover: "cover.jpg",
  
    // PDF基础路径，存储PDF文件的位置（当前注释掉）
    // basePath: "book",
  
    // 插件列表
    plugins: [
      // "styles/website.css",
      // "styles/github.css",
  
      "-lunr",
      "-search",
      "search-pro", // npm install gitbook-plugin-search-pro
      "code",       // npm install gitbook-plugin-code
      "expandable-chapters",  // npm install gitbook-plugin-expandable-chapters
      "back-to-top-button",   // // npm install gitbook-plugin-back-to-top-button
    ],
  
    // 插件配置项
    pluginsConfig: {
      code: {
        copyButton: true, // 是否可复制按钮
      },
    },
  
    // 自定义变量区域
    variables: {
  
      // 可在此处定义和添加自定义变量
  
    },
  };