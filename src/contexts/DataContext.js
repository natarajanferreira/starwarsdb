// import React, { useState, createContext } from "react";

// export const DataContext = createContext();

// export const DataProvider = props => {
//   const [data, setData] = useState([]);

//   return (
//     <DataContext.Provider value={[data, setData]}>
//       {props.children}
//     </DataContext.Provider>
//   );
// };


import React, { useState, createContext } from "react";

export const DataContext = createContext();


export const DataProvider = props => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const updateData = (data) => {
    // setData((prev) => ({
    //   ...prev, 
    //   "data": data
    // }))
    setData(data)
    setFiltered(data)
  }

  const performFilter = (filterTerm) => {
    
    if (filterTerm === '')
      setFiltered(data)
    else 
      setFiltered(data.filter(planet => planet.name.includes(filterTerm)))
    
  }


  return (
    <DataContext.Provider value={[data, updateData, filtered, performFilter]}>
      {props.children}
    </DataContext.Provider>
  );
};
