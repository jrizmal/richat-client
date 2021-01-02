import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

const firebase = require('firebase').default
/* firebase */
var firebaseConfig = require('./services/firebaseConfig.json')
firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/* Axios */
const axios = require("axios").default
axios.defaults.baseURL = (process.env.NODE_ENV == "production" ? "https://ws-chat-api.herokuapp.com/" : "http://localhost:3000/" )

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import "./assets/style.scss"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
