import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import Vuex from 'vuex'
import store from './store/store'

Vue.use(Vuex)

Vue.use(Buefy, {
  defaultIconPack: 'fas'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
