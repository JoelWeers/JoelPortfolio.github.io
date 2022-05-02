import * as Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import 'bootstrap'
import 'jquery'
export default Vue.defineComponent({
  Vue: Vue.createApp(App).use(router).mount('#app')
})
