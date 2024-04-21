import React, { createContext, useReducer } from "react";
import CatalogProductsService from "../services/CatalogProductsService";
import CatalogProductsReducer from "../reducers/CatalogProductsReducer";
import {
  CATALOGPRODUCTS_RECEIVED,
  SET_CATALOGPRODUCT,
  CREATE_CATALOGPRODUCT,
  SET_PROPERTY_CATALOGPRODUCT,
} from "../types/CatalogProducts";
import { HIDE_SPINNER, SHOW_SPINNER } from "../types";

const initialState = {
  catalog_products: null,
  catalog_product: null,
};

export const CatalogProductsContext = createContext(initialState);

export const CatalogProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CatalogProductsReducer, initialState);

  const getCatalogProducts = () => {
    CatalogProductsService.getCatalogProducts().then((response) => {
      const { products } = response.data;
      dispatch({ type: CATALOGPRODUCTS_RECEIVED, payload: products });
    });
  };

  const getSingleCatalogProduct = (catalog_product_id) => {
    CatalogProductsService.getSingleCatalogProduct(catalog_product_id).then(
      (response) => {
        const { product } = response.data;
        dispatch({ type: SET_CATALOGPRODUCT, payload: product });
      }
    );
  };

  const setCatalogProduct = (catalog_product) => {
    dispatch({ type: SET_CATALOGPRODUCT, payload: catalog_product });
  };

  const createCatalogProduct = () => {
    dispatch({ type: CREATE_CATALOGPRODUCT });
  };

  const setPropertyCatalogProduct = (key, value) => {
    dispatch({ type: SET_PROPERTY_CATALOGPRODUCT, payload: { key, value } });
  };

  const saveCatalogProduct = (CatalogProduct, callback) => {
    dispatch({ type: SHOW_SPINNER });
    let service = CatalogProductsService.putCatalogProduct;
    if (isNaN(parseInt(CatalogProduct.catalog_product_id))) {
      service = CatalogProductsService.postCatalogProduct;
    }
    service(CatalogProduct)
      .then(() => {
        success("Producto guardado.");
        dispatch({ type: HIDE_SPINNER });
        clearModal();
        if (typeof callback === "function") {
          callback();
        }
      })
      .catch((error) => {
        dispatch({ type: HIDE_SPINNER });
      });
  };

  const deleteCatalogProduct = (catalog_product_id, callback) => {
    dispatch({ type: SHOW_SPINNER });
    CatalogProductsService.deleteCatalogProduct(catalog_product_id)
      .then(() => {
        success("Producto eliminado.");
        dispatch({ type: HIDE_SPINNER });
        clearModal();
        if (typeof callback === "function") {
          callback();
        }
      })
      .catch((error) => {
        dispatch({ type: HIDE_SPINNER });
      });
  };

  return (
    <CatalogProductsContext.Provider
      value={{
        ...state,
        setCatalogProduct,
        getCatalogProducts,
        saveCatalogProduct,
        deleteCatalogProduct,
        createCatalogProduct,
        getSingleCatalogProduct,
        setPropertyCatalogProduct,
      }}
    >
      {children}
    </CatalogProductsContext.Provider>
  );
};
