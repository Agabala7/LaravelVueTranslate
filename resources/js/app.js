require('./bootstrap');

import { createApp } from 'vue';
import router from './router';

import addTranslations from './components/translations/addTranslations.vue'

const app = createApp({});
app.component('add-translations',addTranslations)
app.use(router)
app.mount('#app')