import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css';

createApp(App)
  .use(router)  // Registra o router primeiro
  .mount('#app');  // Depois monta o app