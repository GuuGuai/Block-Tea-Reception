// https://vitepress.dev/zh/guide/custom-theme
import type { Theme } from 'vitepress'
import { Icon } from '@iconify/vue'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'

import Footer from '../components/Footer.vue'

import './theme-enhanced.css'
import './style.css'

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            // https://vitepress.dev/zh/guide/extending-default-theme#layout-slots
            'doc-after': () => h(Footer),
        })
    },
    enhanceApp({ app, router, siteData }) {
        void router
        void siteData

        app.component('Icon', Icon)
    },
} satisfies Theme
