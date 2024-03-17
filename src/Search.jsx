import * as React from "react";
const Search = (props) => (
  
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={props.onSearch} />
     
    </div>
  );
export default Search;  