import React from "react";

const LabelCard = ({ label }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="text-uppercase">{label.carrier}</h5>
        <p>{label.deliveryEstimate}</p>
        <p>
          Total Pagado: ${label.totalPrice} {label.currency}
        </p>
        <p>
          Número de Rastreo: <a href={label.trackUrl}>{label.trackingNumber}</a>
        </p>
        <a href={label.label} target="_blank" className="btn btn-secondary">
          <i className="fas fa-print me-2"></i> Imprimir Etiqueta
        </a>
      </div>
    </div>
  );
};

export default LabelCard;
