import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

/* firebase */
import firebase from "firebase"
var firebaseConfig = require('./services/firebaseConfig.json')
firebase.initializeApp(firebaseConfig)

/* Bootstrap */
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/* Custom styles */
import "./assets/style.scss"

/* Axios */
const axios = require("axios").default
axios.defaults.baseURL = (process.env.NODE_ENV == "production" ? "https://richat.herokuapp.com/" : "http://localhost:3000/" )

/* Toasts */
import Toasted from 'vue-toasted';
Vue.use(Toasted)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
