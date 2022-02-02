import {useState, useContext} from 'react'
import { SearchContext } from '../../contexts/SearchContext';
import { DataContext } from '../../contexts/DataContext';


export const FiltroNome = () => {

  // endpoint if seaarch with debouce
  // https://swapi-trybe.herokuapp.com/api/planets/?search=oo
  
  
  const [filter, setFilter] = useContext(SearchContext);
  const [data, setData, filtered, performFilter] = useContext(DataContext);

  

  const setFiltroNome = (value) => {
    
    console.log(value)
    setFilter(prev=>{
      return {
        ...prev, 
        "filters": {
          "filterByName": {
            "name": value
          }
        }
      }
    })

    // setFilter('asdfsd')

    console.log(JSON.stringify(filter))
    performFilter(value)

  }

  return (
    <>    
      <input type="text" placeholder="Procurar planetas pelo nome" onChange={e => setFiltroNome(e.target.value)} />
      {/* <p>{JSON.stringify(filters)}</p> */}
      {/* <p>{JSON.stringify(filter)}</p> */}
    </>
  )

  
  
}