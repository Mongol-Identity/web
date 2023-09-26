import React from "react";

const DatePicker = ({ ...props }) => {
  return (
    <div className="mi-date-picker">
        <i className="mi-icon-calendar"/>
        <div className="mi-date-picker-date">2021, May, 05</div>
        <div className="mi-date-picker-title">Mongol Identity Conference May</div>
    </div>
  );
};

export default DatePicker;
