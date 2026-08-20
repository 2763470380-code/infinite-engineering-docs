import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import NotFound from './NotFound.vue'
import CopyQQButton from './components/CopyQQButton.vue'
import ServerUptime from './components/ServerUptime.vue'
import VipPackage from './components/VipPackage.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CopyQQButton', CopyQQButton)
    app.component('ServerUptime', ServerUptime)
    app.component('VipPackage', VipPackage)
  },
  Layout: () => h(DefaultTheme.Layout, null, {
    'not-found': () => h(NotFound)
  })
}
