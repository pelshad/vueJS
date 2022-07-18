import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

createApp(App).use(router).use(store).mount('#app')

window.Kakao.init('e05537990371be03074bf7613aa12b32');