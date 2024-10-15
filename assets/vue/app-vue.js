import { createApp } from 'vue';
import HelloComponent from './controllers/Hello.js';

console.log('Ce message vient de assets/vue/app-vue.js - Vue est initialisé ! 🎉');

createApp(HelloComponent).mount('#app');
