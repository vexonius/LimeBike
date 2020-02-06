import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import bikes from './modules/bikes'
import auth from './modules/auth'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    cart,
    bikes,
    auth
  },
  strict: debug
})
