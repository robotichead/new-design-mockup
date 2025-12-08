import {createPinia} from 'pinia';
import {createApp} from 'vue';
import App from './App.vue';
import './assets/css/main.css';
import router from './router';
import {installIntlayer} from "vue-intlayer";

const pinia = createPinia();
const app = createApp(App);

// i18n
installIntlayer(app);

// Inject libraries
app.use(router);
app.use(pinia);

// Mount
app.mount('#app');
