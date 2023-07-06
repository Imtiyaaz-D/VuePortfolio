import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// custom css
import './assets/css/style.css'

// bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//bootstrapicons
import 'bootstrap-icons/font/bootstrap-icons.css'
createApp(App).use(store).use(router).mount('#app')
