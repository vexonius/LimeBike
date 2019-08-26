import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import bikes from './modules/bikes'
import user from './modules/user'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    cart,
    bikes,
    user
  },
  strict: debug,
})