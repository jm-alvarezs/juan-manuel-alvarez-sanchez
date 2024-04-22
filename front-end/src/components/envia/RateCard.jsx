import React from "react";

const RateCard = ({ rate, selected, setSelected }) => {
  const isChecked = () => {
    if (selected !== null) {
      return selected.service === rate.service;
    }
    return false;
  };
  const handleChamge = (e) => {
    if (e.target.checked) {
      setSelected(rate);
    }
  };

  const checked = isChecked();

  return (
    <div
      onClick={() => setSelected(rate)}
      className={`card mb-3 ${checked ? "border-primary" : ""}`}
    >
      <div className="card-body">
        <div className="row">
          <div className="col-8 col-md-9 col-lg-10 col-xl-11">
            <h5>{rate.serviceDescription}</h5>
            <p>{rate.deliveryEstimate}</p>
            <p>
              {rate.totalPrice} {rate.currency}
            </p>
          </div>
          <div className="col-4 col-md-3 col-lg-2 col-xl-1">
            <input type="radio" name="carrier" checked={checked} disabled />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateCard;
