import { useContext } from 'react'

import { SearchContext } from '../../contexts/SearchContext'
import { DataContext } from '../../contexts/DataContext'
import { FiltroNumericoSimples } from '../FiltroNumericoSimples/FiltroNumbericoSimples'
import { listFilters } from '../../contexts/models'

export const FiltroNumerico = () => {
  const [filter, setFilter] = useContext(SearchContext)

  const [data, , filtered, setFiltered] = useContext(DataContext)

  const filterComparison = (obj, filtro) => {
    const { column, comparison, value } = filtro

    if (comparison === 'igual a') {
      return obj[column] === value
    } else if (comparison === 'maior que') {
      return obj[column] > value
    } else {
      return obj[column] < value
    }
  }

  const handleFilter = (e) => {
    e.preventDefault()
    let base = !!filtered ? filtered : data

    for (let ff in filter.filters.filterByNumericValues) {
      const filtro = filter.filters.filterByNumericValues[ff]

      if (filtro?.column !== '' && filtro?.comparison !== '' && filtro?.value) {
        setFiltered(base.filter((planet) => filterComparison(planet, filtro)))
      }
    }
  }

  const removeFiltro = (index) => {
    const filterToRemove = filter.filters.filterByNumericValues[index]

    if (filterToRemove?.value) {
      setFilter((prev) => {
        const { filterByName, filterByNumericValues } = prev.filters
        let newFilterByNumericValues = filterByNumericValues.filter(
          (item) => item !== filterToRemove
        )

        return {
          ...prev,
          filters: {
            filterByName,
            filterByNumericValues: newFilterByNumericValues
          }
        }
      })

      setFiltered(data)
    }
  }

  const handleChange = (index, field, e) => {
    e.preventDefault()
    setFilter((prev) => {
      const { filterByName, filterByNumericValues } = prev.filters
      filterByNumericValues[index][field] = e.target.value

      const filtro = filterByNumericValues[index]

      if (
        filtro?.column !== '' &&
        filtro?.comparison !== '' &&
        field === 'value' &&
        index === filterByNumericValues.length - 1 &&
        filterByNumericValues.length < listFilters.length
      ) {
        filterByNumericValues.push({})
      }

      return {
        filters: {
          filterByName,
          filterByNumericValues
        }
      }
    })
  }

  return (
    <>
      {filter?.filters?.filterByNumericValues?.length > 0 &&
        filter.filters.filterByNumericValues.map((i, index) => (
          <FiltroNumericoSimples
            key={`filter + ${index}`}
            index={index}
            filter={i}
            onRemove={removeFiltro}
            handleChange={handleChange}
          />
        ))}
      <button onClick={(e) => handleFilter(e)}>Filtrar</button>
    </>
  )
}
