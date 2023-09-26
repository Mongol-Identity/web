import React from "react";

const ResourceCard = ({ data, ...props }) => {
  return (
    <div className="mi-resource-card">
      <div className="mi-resource-card-icon">
        <i className={data.icon} />
      </div>
      <div className="mi-resource-card-sub-title mi-text">{"The word ‘Mongol’ in"}</div>
      <div className="mi-resource-card-title">{data.title}</div>
      <div className="mi-resource-card-detail">
        <div>{data.guide}</div>
        <i className="mi-icon-chevron-right-circle" />
      </div>
      <div className="mi-resource-card-purpose">{data.purpose}</div>
    </div>
  );
};

export default ResourceCard;
