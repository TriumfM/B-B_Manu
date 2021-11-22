import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/scss/main.scss'
import libraries from './libraries'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBJFggZoYEll4HUmYwXbPXv48-7VRIZ_T4',
    libraries: 'places',
}})

Vue.config.productionTip = false

Vue.use(libraries)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
