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
  }
};
