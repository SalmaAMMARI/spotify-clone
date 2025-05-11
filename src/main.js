import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const firebaseConfig = {
  apiKey: "AIzaSyAKYIdzMyB9Ce_kLKP9wButXmEwfWRxrjQ",
  authDomain: "spotify-clone-c526a.firebaseapp.com",
  projectId: "spotify-clone-c526a",
  storageBucket: "spotify-clone-c526a.firebasestorage.app",
  messagingSenderId: "321048997843",
  appId: "1:321048997843:web:add58555067cdbaa394926",
  measurementId: "G-66VM2L5TYH"
};
const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
