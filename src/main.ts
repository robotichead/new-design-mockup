import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/main.css';
import i18n, { loadLocaleMessages } from './i18n';
import router from './router';

const pinia = createPinia();
await loadLocaleMessages(i18n.global.locale.value);
const app = createApp(App);

app.use(router);
app.use(i18n);
app.use(pinia);
app.mount('#app');
