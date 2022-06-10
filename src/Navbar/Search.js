import React from "react";

import searchicon from "../Icons/search.png";
import "./Search.css";

const SearchBar = () => (
  <form action="/" method="get" className="search-form">
    <label htmlFor="header-search">
      <span className="visually-hidden">Search</span>
    </label>
    <div id="input_container">
      <input type="text" id="header-search" placeholder="Search" name="s" />
      <img src={searchicon} id="input_img" alt="search icon" />
    </div>
  </form>
);

export default SearchBar;
