import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import NotFound from './NotFound.vue'
import CopyQQButton from './components/CopyQQButton.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CopyQQButton', CopyQQButton)
  },
  Layout: () => h(DefaultTheme.Layout, null, {
    'not-found': () => h(NotFound)
  })
}
