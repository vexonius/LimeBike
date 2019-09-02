import Repository from "./../../../api/repo";
import router from "./../../router";

const state = {
  isLogged: false,
  user: {},
  error: '',
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
      .then(response => {
        console.log(response);
        context.dispatch("saveToken", response.data.token);
        context.commit("setUserLoggedIn", true);
        context.dispatch("setLoading", false);
        context.commit("saveUserInfo", response.data);
        router.push("home");
      })
      .catch(err => {
        console.log(err.response);
        context.dispatch("setLoading", false);
        context.commit("pushError", err.response.data);
      });
  },

  saveToken(context, token){
    localStorage.setItem('jwt', token)
  },

  registerUser(context, user) {
    if ((user && user.firstName && user.lastName && user.username && user.email && user.password && user.passwordrep)
      && (user.password === user.passwordrep)) {
      Repository.register(user)
        .then(response => {
          console.log(response);
          context.commit("saveUserInfo", response.data.user);
          router.push("login");
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

  logout(context) {
    context.commit("setUserLoggedIn", false);
    router.push("/");
    context.commit("saveUserInfo", null);
    context.dispatch("saveToken", null);

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
  },

  updateUserInfo(){

  },

  getUserInfo(){
    
  }

};

const mutations = {
  saveUserInfo(state, info) {
    state.user = { username: info.username };
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
