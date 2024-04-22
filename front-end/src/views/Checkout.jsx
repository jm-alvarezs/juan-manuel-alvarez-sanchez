import React, { useContext, useState, useEffect } from "react";
import CatalogProductRow from "../components/catalog_products/CatalogProductRow";
import { CatalogProductsContext } from "../context/CatalogProductsContext";
import { AddressContext } from "../context/AddressContext";
import AddressForm from "../components/address/AddressForm";
import { EnviaContext } from "../context/EnviaContext";
import RatesList from "../components/envia/RatesList";
import { UserContext } from "../context/UserContext";
import { validatePhoneNumber } from "../utils";
import { useParams } from "react-router-dom";
import LabelsList from "../components/envia/LabelsList";

const Checkout = () => {
  const { catalog_product_id } = useParams();

  const [step, setStep] = useState(1);
  const [shipment, setShipment] = useState(null);
  const [prevPhone, setPrevPhone] = useState("");

  const { address } = useContext(AddressContext);
  const { getTokenByPhone } = useContext(UserContext);
  const { labels, rates, getRates, getLabel } = useContext(EnviaContext);
  const { catalog_product, getSingleCatalogProduct } = useContext(
    CatalogProductsContext
  );

  useEffect(() => {
    getSingleCatalogProduct(catalog_product_id);
  }, [catalog_product_id]);

  useEffect(() => {
    if (address && address !== null) {
      if (validatePhoneNumber(address.phone) && prevPhone !== address.phone) {
        getTokenByPhone(address.phone);
        setPrevPhone(address.phone);
      }
    }
  }, [address]);

  const handleAddress = (destination) => {
    getRates(catalog_product_id, destination);
    setStep(step + 1);
  };

  const handleLabel = () => {
    getLabel(catalog_product_id, address, shipment);
    setStep(3);
  };

  const renderProduct = () => {
    if (catalog_product !== null) {
      return <CatalogProductRow catalog_product={catalog_product} />;
    }
  };

  const renderAddress = () => {
    if (step === 1) {
      return (
        <div>
          <h2 className="mb-3">Dirección de Envio</h2>
          <AddressForm saveAction={handleAddress} buttonTitle="Cotizar" />
        </div>
      );
    }
  };

  const renderRates = () => {
    if (step === 2) {
      return (
        <div>
          <h2 className="mb-3">Opciones de Envío</h2>
          <RatesList
            rates={rates}
            selected={shipment}
            setSelected={setShipment}
          />
          {shipment !== null && (
            <button onClick={handleLabel} className="btn btn-primary">
              Generar Envío
            </button>
          )}
        </div>
      );
    }
  };

  const renderLabels = () => {
    if (step == 3) {
      return <LabelsList labels={labels} />;
    }
  };

  return (
    <div className="container px-0">
      <div className="row align-items-center mh-100vh">
        <div className="col-12 col-md-6 px-5">
          <h1 className="mb-5">Checkout</h1>
          {renderAddress()}
          {renderRates()}
          {renderLabels()}
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
