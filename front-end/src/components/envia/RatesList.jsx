import React from "react";
import RateCard from "./RateCard";

const RatesList = ({ rates, selected, setSelected }) => {
  const renderRates = () => {
    if (Array.isArray(rates)) {
      return rates.map((rate) => (
        <RateCard
          rate={rate}
          key={rate.service}
          selected={selected}
          setSelected={setSelected}
        />
      ));
    }
    return <div className="spinner-border" />;
  };

  return <div className="container-fluid px-0">{renderRates()}</div>;
};

export default RatesList;
