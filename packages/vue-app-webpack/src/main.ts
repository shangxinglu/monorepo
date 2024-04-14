import { createApp } from 'vue';
import App from './app.vue';
import './app.less'
import { createPinia } from 'pinia'

import router from './router';

const pinia = createPinia()

const app = createApp(App);
app.use(pinia)
app.use(router);
app.mount('#app');