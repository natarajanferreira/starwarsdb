import { useContext } from 'react'
import { SearchContext } from '../../contexts/SearchContext'
import { DataContext } from '../../contexts/DataContext'

export const FiltroNome = () => {
  // endpoint if seaarch with debouce
  // https://swapi-trybe.herokuapp.com/api/planets/?search=oo

  const [, setFilter] = useContext(SearchContext)
  const [data, , , setFiltered] = useContext(DataContext)

  const setFiltroNome = (value) => {
    setFilter((prev) => {
      const { filterByNumericValues } = prev.filters

      return {
        filters: {
          filterByName: value,
          filterByNumericValues
        }
      }
    })

    performFilterName(value)
  }

  const performFilterName = (filterTerm) => {
    if (filterTerm === '') setFiltered(data)
    else setFiltered(data.filter((planet) => planet.name.includes(filterTerm)))
  }

  return (
    <>
      <input
        type="text"
        placeholder="Procurar planetas pelo nome"
        onChange={(e) => setFiltroNome(e.target.value)}
      />
    </>
  )
}
