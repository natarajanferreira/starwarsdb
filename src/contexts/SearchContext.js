import React, { useState, createContext } from "react";
import { initial_filter } from "./initialprops";

export const SearchContext = createContext();

export const SearchProvider = props => {
  // const [filter, setFilter] = useState(initial_filter);
  const [filter, setFilter] = useState(initial_filter);
  return (
    <SearchContext.Provider value={[filter, setFilter]}>
      {props.children}
    </SearchContext.Provider>
  );
};
