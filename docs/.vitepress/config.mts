import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '无限工程文档库',
  description: 'INFINITE DOCUMENTATION｜Minecraft 1.21.1 科技、魔法与探索服务器官方文档。',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { property: 'og:title', content: '无限工程文档库｜INFINITE DOCUMENTATION' }],
    ['meta', { property: 'og:description', content: 'Minecraft 1.21.1 科技、魔法与探索服务器官方文档。' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: '/site-icon.png' }],
    ['meta', { name: 'theme-color', content: '#1d6fb8' }]
  ],
  themeConfig: {
    logo: '/site-icon.png',
    siteTitle: '无限工程',
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '教程', link: '/tutorial/' },
      { text: '规则', link: '/rules/' },
      { text: '常见问题', link: '/faq/' },
      { text: '会员赞助', link: '/sponsor/' },
      { text: '更新日志', link: '/changelog/' }
    ],
    // 仓库创建后取消注释并填入真实链接，VitePress 会将其显示在右上角。
    // socialLinks: [{ icon: 'github', link: 'https://github.com/你的组织/你的仓库' }],
    sidebar: [
      {
        text: '开始',
        items: [
          { text: '文档首页', link: '/' },
          { text: '萌新指南', link: '/guide/' }
        ]
      },
      {
        text: '服务器',
        items: [
          { text: '服务器规则', link: '/rules/' },
          { text: '常见问题', link: '/faq/' }
        ]
      },
      {
        text: '游戏教程',
        items: [
          { text: '教程首页', link: '/tutorial/' }
        ]
      },
      {
        text: '会员赞助',
        items: [
          { text: '会员赞助', link: '/sponsor/' }
        ]
      },
      {
        text: '更新日志',
        items: [
          { text: '更新日志', link: '/changelog/' }
        ]
      }
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '没有找到相关内容',
            resetButtonTitle: '清除查询条件',
            footer: { selectText: '选择', navigateText: '切换' }
          }
        }
      }
    },
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '最后更新于' },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换为浅色模式',
    darkModeSwitchTitle: '切换为深色模式',
    footer: {
      message: '无限工程文档库 · INFINITE DOCUMENTATION',
      copyright: '服务器信息与内容持续更新中'
    }
  }
})
