import axios from "axios";
import api from "./api";

const route = "/services";

export default {
  getStates: (country_code) =>
    axios.get(`http://queries.envia.com/state?country_code=${country_code}`),
  getQuote: (data) => api.get(`${route}/quote`, { ...data }),
  getShipping: (data) => api.get(`${route}/shipping`, { ...data }),
};
