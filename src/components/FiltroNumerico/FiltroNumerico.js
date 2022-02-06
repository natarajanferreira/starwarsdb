import { useContext, useState, useEffect }  from 'react'

import { SearchContext } from '../../contexts/SearchContext';
import { DataContext } from '../../contexts/DataContext';
import { FiltroNumericoSimples } from '../FiltroNumericoSimples/FiltroNumbericoSimples';
  
export const listFilters = ["population", "orbital_period", "diameter", "rotation_period",  "surface_water"]

export const FiltroNumerico = () => {

  // const [filterContext] = useContext(SearchContext);
  // const [filters, setFilters] = useState(filterContext)
  const [filter, setFilter] = useContext(SearchContext) 
  
  const [data, setData, filtered, setFiltered] = useContext(DataContext);

  // const [myFilters, setMyFilters] = useState([])

  // useEffect(() => {
  //   if (filter?.filters?.filterByNumericValues?.length > 0)
  //     setMyFilters(filter.filters.filterByNumericValues)
  // }, [filter])
  

  const handleFilter = () => {
    let base = filtered ? !!filtered : data
    // console.log(filter)
    // console.log(filtered)

    const { filterByNumericValues } = filter.filters
    
    console.log(filterByNumericValues)
    
    // setFiltered(base.filter(planet => planet.name.includes(filterTerm)))
    // const res = filter?.filterByNumericValues?.foreach(f=>base.filter(planet => planet[f.column] == f.value))
    
    for (const ff in filterByNumericValues) {
      console.log(ff)
      // base = base.filter(planet => planet[ff.column] == ff.value)
    }
    // setFiltered(res)
    
  }
  
  const removeFiltro = (column) => {

    // setFilter(prev => {
    //     const {filterByName, filterByNumericValues} =  prev.filters;
    //     let newFilterByNumericValues = [...filterByNumericValues]
    //     newFilterByNumericValues.splice(index, 1)
    //     return ({
    //         ...prev, 
    //         "filters": {
    //             filterByName, 
    //             "filterByNumericValues": newFilterByNumericValues
    //         }
    //     })
    // })
    setFilter(prev => {
      const {filterByName, filterByNumericValues} =  prev.filters;
      let newFilterByNumericValues = filterByNumericValues.filter((item)=> item.column != column)
      
      return ({
          ...prev, 
          "filters": {
              filterByName, 
              "filterByNumericValues": newFilterByNumericValues
          }
      })
  })
}


  return (
    <div>
      <div>
        <div>{JSON.stringify(filter)}</div>
        {/* <div>{JSON.stringify(myFilters)}</div> */}
        {/* {filter?.filters?.filterByNumericValues?.length > 0 && filter.filters.filterByNumericValues.map((i, index)=><FiltroNumericoSimples key={`filter + ${index}`} index={index} filter={i} />)} */}
        {filter?.filters?.filterByNumericValues?.length > 0 && filter.filters.filterByNumericValues.map((i, index)=><FiltroNumericoSimples key={`filter + ${index}`} index={index} column={i.column} filter={i} onRemove={removeFiltro} />)}
        
        {/* {myFilters?.map((i, index)=><FiltroNumericoSimples index={index} />)} */}
        {/* {filter?.filters?.filterByNumericValues?.length == 0 && <FiltroNumericoSimples />} */}
        {/* <FiltroNumericoSimples /> */}
        
        
        {/* <button onClick={()=>React.create}>criar</button> */}
      </div>
      <button onClick={()=>handleFilter()}>Filtrar</button>
    </div>
  ) 
}