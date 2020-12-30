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
    description: "GitHubを用いた共同開発のフロー",
    nav: [],
    sidebar: [
      ['/', "トップ"],
      ['/4章-変数変換/', "4章-変数変換"],
    ],
    repo: 'kazuki-komori/book_tokei-semi',
    repoLabel: 'Github',
    editLinks: true,
    editLinkText: 'ページに不明点や誤字等があれば、Github にて修正を提案してください！',
  }
}