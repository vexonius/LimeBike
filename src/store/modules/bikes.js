import Repository from "./../../../api/repo";

const state = {
    products: [],
    filters: [
        { name: "CASUAL", id: 1, value: false },
        { name: "BASIC", id: 2, value: false },
        { name: "SPORT", id: 3, value: false },
        { name: "PRO", id: 4, value: false }
    ],
    filtered: false
}

const getters = {
    getAllProducts: (state) => {
        return state.products;
    },
    getProductsFiltered: (state, getters) => {
        let activeFilters = getters.getActiveFilters;
        console.log(activeFilters);

        return state.products.filter((product) => {
            let rightCategory = false;

            for (let fltr of activeFilters){
                if(product.category == fltr.name)
                    rightCategory = true;
            }

             return rightCategory;
                
        })
    },
    isFilteringOn(state) {
        let active = state.filters.filter(item => {
            return item.value == true;
        });

        if (active.length == 0) return false;
        return true;
    },
    getFilters(state){
        return state.filters;
    },
    getActiveFilters(state) {
        let active = state.filters.filter(item => {
            return item.value == true;
        });
        return active;
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