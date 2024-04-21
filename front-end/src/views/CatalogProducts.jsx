import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/catalog_products/CatalogProductCard";
import { CatalogProductsContext } from "../context/CatalogProductsContext";

const CatalogProducts = () => {
  const { catalog_products, getCatalogProducts } = useContext(
    CatalogProductsContext
  );

  useEffect(() => {
    getCatalogProducts();
  }, []);

  const renderProducts = () => {
    if (Array.isArray(catalog_products)) {
      return catalog_products.map((catalog_product) => (
        <Link
          key={catalog_product.catalog_product_id}
          className="col-6 col-md-4 col-xl-3"
          to={`/${catalog_product.catalog_product_id}`}
        >
          <ProductCard catalog_product={catalog_product} />
        </Link>
      ));
    }
  };

  return (
    <div className="container-fluid">
      <h1>Productos</h1>
      <div className="row">{renderProducts()}</div>
    </div>
  );
};

export default CatalogProducts;
