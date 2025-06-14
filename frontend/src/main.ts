import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createI18n} from "vue-i18n";
import i18n from "./i18n";

const app = createApp(App)

app.use(router)

app.use(i18n)


app.mount('#app')
