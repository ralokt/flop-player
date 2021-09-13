import './styles/common.css'

import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'
import { i18n } from '@/i18n'
import NP from 'number-precision'

// If you want to get rid of XXX is beyond boundary when transfer to integer, the results may not be accurate, use this at the beginning of your app to turn off boundary checking.
// https://github.com/nefe/number-precision#usage
NP.enableBoundaryChecking(false) // default param is true

createApp(App).use(store).use(i18n).mount('#app')
