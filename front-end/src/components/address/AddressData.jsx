import React from "react";

const AddressData = ({ address, handleEdit }) => {
  const renderAddress = () => {
    if (address.city === null) {
      return <p className="mb-0">No has cargado esta información</p>;
    }
    return (
      <div>
        {address.street !==  null && (
          <p className="mb-1">
          {address.street} {address.number} {address.neighborhood}
          </p>
        )}
        <p className="mb-1">
          {address.city}, {address.state}, {address.country}
        </p>
      </div>
    );
  };

  return (
    <div className="container-fluid px-0">
      {renderAddress()}
      <button onClick={handleEdit} className="btn btn-sm mt-3 btn-primary">
        <i className="fa fa-edit me-3"></i>Editar Dirección
      </button>
    </div>
  );
};

export default AddressData;
