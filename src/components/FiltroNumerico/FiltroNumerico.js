import { useState, useContext } from 'react'

import { SearchContext } from '../../contexts/SearchContext';
import { DataContext } from '../../contexts/DataContext';

  
export const listFilters = ["population", "orbital_period", "diameter", "rotation_period",  "surface_water"]

export const FiltroNumerico = () => {

  // const [filterContext] = useContext(SearchContext);
  // const [filters, setFilters] = useState(filterContext)
  const [filter, setFilter] = useState(SearchContext)
  const [data, setData, filtered, performFilter] = useContext(DataContext);


  // const setFiltroNome = (value) => {
  //   setFilters({
  //     "filters": {
  //       "filterByName": {
  //         "name": value
  //       }
  //     }
  //   })

  //   performFilter(value)
  // }
  
  return (
    <div>
      {/* <div>{JSON.stringify(filter)}</div> */}
      <select>
        {listFilters.map(opt=><option>{opt}</option>)}
        {/* <option>1</option> */}
      </select>
      <select>
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input tipe="number"></input>
      <button>Filtrar</button>
    </div>
  ) 
}