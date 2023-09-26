import React from "react";

const IntroCard = ({ title, icon, content, ...props }) => {
  return (
    <div className="mi-home-info-item-container row no-gutters">
      <div className="mi-home-info-item col col-sm-10 col-md-10 col-lg-6 col-xl-6">
        <div className="mi-home-info-item-icon">
          <i className={icon} />
        </div>
        <div className="mi-home-info-item-content">
          <h4>{title}</h4>
          <p className="mi-p-small">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default IntroCard;
