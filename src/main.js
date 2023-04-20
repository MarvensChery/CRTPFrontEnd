import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

import router from './router';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

// donner l'accès au routeur
pinia.use(({ store }) => {
    // eslint-disable-next-line no-param-reassign
    store.router = markRaw(router);
});
app.mount('#app');
