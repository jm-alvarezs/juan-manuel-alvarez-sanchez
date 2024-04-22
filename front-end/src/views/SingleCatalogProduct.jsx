import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CatalogProductsContext } from "../context/CatalogProductsContext";

const SingleCatalogProduct = () => {
  const { catalog_product_id } = useParams();

  const { catalog_product, getSingleCatalogProduct } = useContext(
    CatalogProductsContext
  );
  useEffect(() => {
    getSingleCatalogProduct(catalog_product_id);
  }, [catalog_product_id]);

  const renderProduct = () => {
    if (catalog_product !== null) {
      return (
        <div className="row mh-100vh align-items-center">
          <div className="col-12 col-md-6">
            <img
              src={catalog_product.thumbnail}
              className="card-img-top"
              alt={catalog_product.name}
            />
          </div>
          <div className="col-12 col-md-6">
            <h1>{catalog_product.name}</h1>
            <p>{catalog_product.description}</p>
            <Link
              to={`/checkout/${catalog_product_id}`}
              className="btn btn-primary"
            >
              Cotizar Envio
            </Link>
          </div>
        </div>
      );
    }
    return <div className="spinner-border" />;
  };
  return <div className="container">{renderProduct()}</div>;
};

export default SingleCatalogProduct;
