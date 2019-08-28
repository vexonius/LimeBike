import Repository from "./../../../api/repo";

const state = {
  isLogged: false,
  user: {},
  errors: null
};

const getters = {
  getUser: state => {
    return state.user;
  },

  isUserLogged: state => {
    return state.isLogged;
  }
};

const actions = {
  loginUser(context, user) {
    Repository.login(user)
      .then(userData => {
		  console.log(userData);
        context.commit("loginUser", userData);
      })
      .catch(err => {
        context.commit("pushError", err);
      });
  }
};

const mutations = {
  loginUser(state, data) {
    state.user = data.user;
  },
  pushError(state, error) {
    state.error = error.msg;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
