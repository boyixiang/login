import { createApp } from 'vue';
import router from './router';
import '@/assets/css/base.css';

import App from './App.vue'

createApp(App).use(router).mount('#app');
