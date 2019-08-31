import Repository from "./../../../api/repo";

const state = {
    products: [],
    filtered: false
}

const getters = {
    getAllProducts: (state) => {
        return state.products;
    },
    getProductsFiltered: (state, filters) => {
        return state.products.filter((product) => {
            return product.category === 'BASIC';
        })
    }
}

const actions = {
    fetchProducts(context) {
        Repository.fetchAllProducts().then(res => {
            console.log(res)
            context.commit('updateProducts', res.data)
        })
            .catch(err => console.error(err))
    }
}

const mutations = {
    updateProducts(state, products) {
        state.products = products;
    }
}

export default {
    state,
    getters, 
    mutations, 
    actions, 
};