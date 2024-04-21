import api from "./api";

const route = "/products";

export default {
  getCatalogProducts: () => api.get(route),
  getSingleCatalogProduct: (catalog_product_id) =>
    api.get(`${route}/${catalog_product_id}`),
  postCatalogProduct: (catalog_product) =>
    api.post(route, { ...catalog_product }),
  putCatalogProduct: (catalog_product) =>
    api.put(route, { ...catalog_product }),
  deleteCatalogProduct: (catalog_product) =>
    api.delete(`${route}/${catalog_product}`),
};
