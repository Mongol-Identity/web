import React from "react";

const CalendarCard = ({ data, ...props }) => {
  return (
    <div className="mi-calendar-card">
      <img src={data.image} />
      <div className="mi-card-gradient"></div>
      {data.isOnline && (
        <div className="mi-calendar-card-status mi-text">online</div>
      )}
      <div className="mi-calendar-card-date mi-text">
        {data.leftDays + " days left"}
      </div>
      <div className="mi-calendar-card-data">
        <div className="mi-card-date">{data.date}</div>
        <div className="mi-card-title">{data.title}</div>
      </div>
      {data.location && (
        <div className="mi-calendar-card-location">
          <i className="mi-icon-location" />
          <p className="mi-p-small">{data.location}</p>
        </div>
      )}
    </div>
  );
};

export default CalendarCard;
