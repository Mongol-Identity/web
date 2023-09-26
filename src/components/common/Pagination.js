import React from "react";
import { NavLink } from "react-router-dom";
import { COLORS } from "../../constant/constant";

const Pagination = ({ size, current, ...props }) => {
  let itemList = [];

  for (let i = 1; i <= size; i++) {
    itemList.push({ value: i, selected: current === i });
  }

  return (
    <div className="mi-pagination">
      <div className="mi-pagination-prev">
        <i className="mi-icon-chevron-left" />
      </div>
      {itemList.map((item, i) => {
        return (
          <div
            className={
              item.selected
                ? "mi-pagination-value-selected"
                : "mi-pagination-value"
            }
          >
            {item.value}
          </div>
        );
      })}
      <div className="mi-pagination-next">
        <i className="mi-icon-chevron-right" />
      </div>
    </div>
  );
};

export default Pagination;
