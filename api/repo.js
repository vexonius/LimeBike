import axios from "axios";

const BASE_URL = "http://localhost:8081";

export default {
  login(data) {
    return axios.post(`${BASE_URL}/login`, data);
  },
  register(data) {
    return axios.post(`${BASE_URL}/register`, data);
  },
  protected() {
    return axios.post(`${BASE_URL}/protected`);
  },
  fetchAllProducts(){
    return axios.get(`${BASE_URL}/products`);
  },
  updateUserInfo(data, config){
    return axios.post(`${BASE_URL}/users/${id}/info`, data, config);
  },
  getAllUserTransactions(id, config){
    return axios.get(`${BASE_URL}/users/${id}/transactions`, config);
  },
  createNewTransaction(data, config){
    console.log(data);
    return axios.post(`${BASE_URL}/users/${data.userId}/transactions`, data, config);
  }
};
