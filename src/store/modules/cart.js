

const state = {
    items: [],
    total: 0
}

const getters = {
    getItemsInCart(state){
        return state.items;
    },
    
    getItemsCount(state){
        if(state.items.length == 0) return 0;

        let num = state.items.reduce((count, amount) => {
            return count + parseInt(amount.amount);
        }, 0);

        return num;
    },

    getTotal(state){
        if(state.items.length == 0) return 0;

        let total = state.items.reduce((count, amount) => {
            return count + parseInt(amount.amount) * parseFloat(amount.item.price);
        }, 0);

        return total;
    }
}

const actions = {
    addItemToCart(context, item){
        context.commit("addItem", {item: item, amount: 1});
    },

    addOneMore(context, index){
        context.commit("increaseByOne", index);
    },

    removeOne(context, index){
        context.commit("decreaseByOne", index);
    },


}

const mutations = {
    addItem(state, val){
        let exists = state.items.filter( item => {
            return item.item.serialNumber == val.item.serialNumber;
        });

        if(exists.length == 0)
            return state.items.push(val);

        return exists[0].amount++;
    },
    increaseByOne(state, index){
        state.items[index].amount++;
    },
    decreaseByOne(state, index){
        console.log(index);
        state.items[index].amount--;

        if(state.items[index].amount==0)
            state.items.splice(index, 1);
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}