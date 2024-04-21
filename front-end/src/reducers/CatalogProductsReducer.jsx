import {
  SET_CATALOGPRODUCT,
  CREATE_CATALOGPRODUCT,
  CATALOGPRODUCTS_RECEIVED,
  SET_PROPERTY_CATALOGPRODUCT,
} from "../types/CatalogProducts";

const schema = {
  catalog_product_id: "",
  name: "",
  description: "",
  height: "",
  length: "",
  width: "",
};

const CatalogProductsReducer = (state, { type, payload }) => {
  switch (type) {
    case CATALOGPRODUCTS_RECEIVED:
      return { ...state, catalog_products: payload };
    case SET_CATALOGPRODUCT:
      return { ...state, catalog_product: payload };
    case CREATE_CATALOGPRODUCT:
      return { ...state, catalog_product: schema };
    case SET_PROPERTY_CATALOGPRODUCT: {
      const { key, value } = payload;
      const catalog_product = { ...state.catalog_product };
      catalog_product[key] = value;
      return { ...state, catalog_product };
    }
    default:
      return { ...state };
  }
};

export default CatalogProductsReducer;
