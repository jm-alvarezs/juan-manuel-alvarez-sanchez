import React from "react";

const CatalogProductCard = ({ catalog_product }) => {
  return (
    <div className="card shadow mb-3">
      <img src="..." className="card-img-top" alt={catalog_product.name} />
      <div className="card-body">
        <h5 className="card-title">{catalog_product.name}</h5>
      </div>
    </div>
  );
};

export default CatalogProductCard;
