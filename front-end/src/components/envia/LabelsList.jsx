import React from "react";
import LabelCard from "./LabelCard";

const LabelsList = ({ labels }) => {
  const renderLabels = () => {
    if (Array.isArray(labels)) {
      return labels.map((label) => (
        <LabelCard label={label} key={label.trackingNumber} />
      ));
    }
    return <div className="spinner-border" />;
  };

  return <div className="container-fluid px-0">{renderLabels()}</div>;
};

export default LabelsList;
