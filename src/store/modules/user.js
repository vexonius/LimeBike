import store from "../store";

const state = {
    isLogged: false,
    user: null

}

const getters = {
    getUser: (state) => {
        return state.user;
    },

    isUserLogged: () => {
        return state.isLogged;
    }
}