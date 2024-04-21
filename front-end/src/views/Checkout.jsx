import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddressForm from "../components/address/AddressForm";
import { EnviaContext } from "../context/EnviaContext";
import CatalogProductRow from "../components/catalog_products/CatalogProductRow";
import { CatalogProductsContext } from "../context/CatalogProductsContext";

const Checkout = () => {
  const { catalog_product_id } = useParams();

  const { catalog_product, getSingleCatalogProduct } = useContext(
    CatalogProductsContext
  );
  const { getQuote } = useContext(EnviaContext);

  useEffect(() => {
    getSingleCatalogProduct(catalog_product_id);
  }, [catalog_product_id]);

  const renderProduct = () => {
    if (catalog_product !== null) {
      return <CatalogProductRow catalog_product={catalog_product} />;
    }
  };
  return (
    <div className="container-fluid px-0">
      <div className="row align-items-center mh-100vh">
        <div className="col-12 col-md-6 px-5">
          <h1 className="mb-5">Checkout</h1>
          <h2 className="mb-3">Dirección de Envio</h2>
          <AddressForm saveAction={getQuote} buttonTitle="Cotizar" />
        </div>
        <div className="col-12 col-md-6 px-5 bg-light mh-100vh">
          <div className="row align-items-center mh-100vh">
            {renderProduct()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
