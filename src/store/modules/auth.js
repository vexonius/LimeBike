import Repository from "./../../../api/repo";
import VueRouter from "./../../router";

const state = {
  isLogged: false,
  user: { name: 'test', password: 'secret'},
  error: '',
  token: '',
  isLoading: false
};

const getters = {
  getUser: state => {
    return state.user;
  },

  isUserLogged: state => {
    return state.isLogged;
  },

  getError: state => {
    return state.error;
  },

  isLoading: state => {
    return state.isLoading;
  }
};

const actions = {
  loginUser(context, user) {
    Repository.login(user)
      .then(userData => {
		  console.log(userData);
        context.commit("loginUser", userData.data);
        VueRouter.push("home");
      })
      .catch(err => {
        console.log(err);
        context.commit("pushError", err);
      });
  },

  setLoading(context, val){
    context.commit("setLoading", val);
  },

  checkInputs({dispatch, commit}, user){
    if(user.name && user.password){
      dispatch("setLoading", true);
      dispatch("loginUser", user);
    } else {
      dispatch("setLoading", false);
      commit("pushError", {msg: "Please check if you entered all the required credentials"})
    }
  }
};

const mutations = {
  loginUser(state, data) {
    state.token = data.token
  },

  pushError(state, err) {
    state.error = err.msg;
  },

  setLoading(state, val){
    state.isLoading = val;
  }

};

export default {
  state,
  actions,
  mutations,
  getters
};
