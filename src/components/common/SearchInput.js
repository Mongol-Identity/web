import React from "react";

const SearchInput = ({ ...props }) => {
  return (
    <div className="mi-search-input">
        <i className="mi-icon-search"/>
        <input placeholder="Search"/>
    </div>
  );
};

export default SearchInput;
