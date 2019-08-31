import Repository from "./../../../api/repo";
import VueRouter from "./../../router";

const state = {
  isLogged: false,
  user: {},
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
        context.commit("saveToken", userData.data);
        context.commit("setUserLoggedIn", true);
        context.dispatch("setLoading", false);
        context.commit("saveUserInfo", userData.data);
        VueRouter.push("home");
      })
      .catch(err => {
        console.log(err.response);
        context.dispatch("setLoading", false);
        context.commit("pushError", err.response.data);
      });
  },

  registerUser(context, user) {
    if ((user && user.firstName && user.lastName && user.username && user.email && user.password && user.passwordrep)
      && (user.password === user.passwordrep)) {
      Repository.register(user)
        .then(userData => {
          console.log(userData);
          context.commit("saveUserInfo", userData.data.user);
          VueRouter.push("login");
        })
        .catch(err => {
          console.log(err.response);
          context.commit("pushError", err.response.data);
        });
    } else {
      context.dispatch("setLoading", false);
      context.commit("pushError", { message: "Please check if you entered all the required credentials" });
    }
  },


  setLoading(context, val) {
    context.commit("setLoading", val);
  },

  checkInputs({ dispatch, commit }, user) {
    if (user.name && user.password) {
      dispatch("setLoading", true);
      dispatch("loginUser", user);
    } else {
      dispatch("setLoading", false);
      commit("pushError", { message: "Please check if you entered all the required credentials" });
    }
  },

  clearError(context) {
    context.commit("clearErrorMessage");
  }

};

const mutations = {
  saveToken(state, data) {
    state.token = data.token;
  },

  saveUserInfo(state, info) {
    state.user = {username: info.username};
  },

  pushError(state, err) {
    state.error = err.message;
  },

  setLoading(state, val) {
    state.isLoading = val;
  },

  setUserLoggedIn(state, val) {
    state.isLogged = val;
  },

  clearErrorMessage(state) {
    state.error = '';
  }

};

export default {
  state,
  actions,
  mutations,
  getters
};
