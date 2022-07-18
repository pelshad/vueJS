import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import mixins from './mixins'

createApp(App)
.mixin(mixins)
.use(router)
.use(store)
.mount('#app')

window.Kakao.init('e05537990371be03074bf7613aa12b32');