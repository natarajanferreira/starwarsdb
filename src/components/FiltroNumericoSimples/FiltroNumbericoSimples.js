import { useState, useContext } from 'react'
import { listFilters, comparison } from '../../contexts/models'  
import { SearchContext } from '../../contexts/SearchContext'

export const FiltroNumericoSimples = () => {

    const [filterContext, setFilterContext] = useContext(SearchContext)

    const columnOptions = listFilters.filter(i => ! filterContext.filters.filterByNumericValues.map(x => x.column).includes(i))
    
    const [filtro, setFiltro] = useState({
        column: columnOptions[0],
        // column: listFilters.filter(i => ! filterContext.filters.filterByNumericValues.map(x => x.column) ) [0],
        comparison: comparison[0]
    })

    const handleChange = (e, field) => {
        setFiltro(prev=>({...prev, [field]: e.target.value}))
        if (filtro?.column != '' && filtro?.comparison != '' && field == 'value' && e?.target?.value) 
            
            setFilterContext(prev => {
                
                const {filterByName, filterByNumericValues} =  prev.filters;
                
                const index = filterByNumericValues.findIndex((obj => obj.column == filtro.column));
                const novoFiltro = { ...filtro, value: e.target.value }
                if (index != -1) 
                    filterByNumericValues[index] = (novoFiltro)
                else
                filterByNumericValues.push(novoFiltro)
                
                return ({
                    "filters": {
                        filterByName, 
                        filterByNumericValues
                    }
                })
                

            })

    }

    return (
        <>
            <div>{JSON.stringify({ filtro })}</div>
            <select onChange={e => handleChange(e, "column")}>
                {columnOptions.map(opt=><option key={opt}>{opt}</option>)}
            </select>
            <select onChange={e => handleChange(e, "comparison")}>
                {comparison.map(comp=>(<option key={comp}>{comp}</option>))}
            </select>
            <input type="number" onChange={e => handleChange(e, "value")} />
        </>
  ) 
}