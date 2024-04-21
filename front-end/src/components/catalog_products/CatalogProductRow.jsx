import React from "react";

const CatalogProductRow = ({ catalog_product }) => {
  return (
    <div className="row">
      <div className="col-4">
        <img src="..." class="card-img-top" alt={catalog_product.name} />
      </div>
      <div className="col-8">
        <h5>{catalog_product.name}</h5>
        <p>{catalog_product.description}</p>
      </div>
    </div>
  );
};

export default CatalogProductRow;
