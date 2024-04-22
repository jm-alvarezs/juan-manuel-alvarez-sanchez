import api from "./api";

const route = "/users";

export default {
  getUser: (phone) => api.get(`${route}?phone=${phone}`),
  setToken: (token) => {
    api.defaults.headers.common["Authorization"] = token;
  },
};
