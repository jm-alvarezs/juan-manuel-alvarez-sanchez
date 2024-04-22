import axios from "axios";
import api from "./api";

const route = "/envia";

export default {
  getStates: (country_code) =>
    axios.get(`http://queries.envia.com/state?country_code=${country_code}`),
  getRates: (catalog_product_id, destination) =>
    api.post(`${route}/rate`, { catalog_product_id, destination }),
  getShipping: (catalog_product_id, destination, shipment) =>
    api.post(`${route}/generate`, {
      catalog_product_id,
      destination,
      shipment,
    }),
};
