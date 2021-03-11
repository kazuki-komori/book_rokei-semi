const path = require("path")
// .vuepress/config.js
module.exports = {
  title: "統計学実践ワークブック",
  description: '宿久研究室 ゼミ 2020/11-',
  plugins: [
    [
      '@maginapp/vuepress-plugin-katex',
        {
          delimiters: 'dollars'
        }
    ],
  ],
  themeConfig: {
    description: "数理統計ゼミ資料",
    nav: [],
    sidebar: [
      ['/', "トップ"],
      ['/4章-変数変換/', "4章-変数変換"],
      ['/8章-統計的推定の基礎/', "8章-統計的推定の基礎"],
      ['/12章-一般の分布に関する検定手法/', "12章-一般の分布に関する検定手法"],
    ],
    repo: 'kazuki-komori/book_tokei-semi',
    repoLabel: 'Github',
    editLinks: true,
    editLinkText: 'ページに不明点や誤字等があれば、Github にて修正を提案してください！',
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'img')
      }
    }
  }
}