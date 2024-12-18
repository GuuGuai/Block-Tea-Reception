import { type DefaultTheme, defineConfig } from 'vitepress'

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
    lang: 'zh-Hans',
    title: '方块茶话会',
    description: 'Block Tea Reception',
    lastUpdated: true,
    cleanUrls: true,

    themeConfig: {
    // https://vitepress.dev/zh/reference/default-theme-config
        logo: 'https://wsrv.nl/?url=p.qlogo.cn/gh/1142349003/1142349003/100/&mask=circle',
        // siteTitle: '',
        nav: nav(),
        sidebar: sidebar(),
        // socialLinks: [
        //   { icon: 'github', link: 'https://github.com/GuuGuai' },
        // ],

        externalLinkIcon: true,
        langMenuLabel: '切换语言',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        sidebarMenuLabel: '菜单',
        outline: { level: [2, 3], label: '目录' },
        returnToTopLabel: '返回顶部',
        editLink: {
            pattern: 'https://github.com/GuuGuai/Block-Tea-Reception/blame/main/docs/:path',
            text: '源代码',
        },
        lastUpdated: {
            text: '更新于',
            formatOptions: { dateStyle: 'short', timeStyle: 'medium' },
        },
        docFooter: { prev: '上一篇', next: '下一篇' },

        footer: {
            message: 'kaguyasama@yeah.net(古古怪怪)　dyr61145713@hotmail.com(寒香)',
            copyright: `© 2020-${new Date().getFullYear()} 方块茶话会 (Block Tea Reception)`,
        },
    },

    head: [
        ['link', { rel: 'icon', href: 'https://wsrv.nl/?url=p.qlogo.cn/gh/1142349003/1142349003/100/&mask=circle' }],
        ['link', { rel: 'stylesheet', href: 'https://lib.baomitu.com/font-awesome/6.5.1/css/all.min.css', media: 'none', onload: 'media="all"' }],
    ],
})

function nav(): DefaultTheme.NavItem[] {
    return [
        { text: '文档', link: '/server', activeMatch: '^/(?!about$).+' },
        { text: '友链', items: [
            { text: '野生技协', link: 'https://thisis.host/' },
            { text: '古怪杂记本', link: 'https://gug.thisis.host/' },
            { text: '纸鹿摸鱼处', link: 'https://blog.zhilu.cyou/' },
        ] },
        { text: '关于', link: '/about' },
    ]
}

function sidebar(): DefaultTheme.Sidebar {
    return [
        { text: '文档', items: [
            { text: '服务器', link: '/server' },
            { text: '机器人', link: '/bot' },
            { text: '插件指令帮助', items: [
                { text: 'Ledger查熊', link: '/help/ledger' },
                { text: '群服互联Bot Connect', link: '/help/bot-connect' },
            ] },
            { text: '群头衔', link: '/title' },
            { text: '赞助', link: '/sponsor' },
        ] },
    ]
}
