import Repository from './../../../api/repo'

const state = {
  products: [],
  filters: {
    casual: 'CASUAL',
    basic: 'BASIC',
    sport: 'SPORT',
    pro: 'PRO'
  },
  filtered: false
}

const getters = {
  getAllProducts: state => {
    return state.products
  },
  getFilters(state) {
    return state.filters
  }
}

const actions = {
  fetchProducts(context) {
    Repository.fetchAllProducts()
      .then(res => {
        console.log(res)
        context.commit('updateProducts', res.data)
      })
      .catch(err => console.error(err))
  }
}

const mutations = {
  updateProducts(state, products) {
    state.products = products
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
