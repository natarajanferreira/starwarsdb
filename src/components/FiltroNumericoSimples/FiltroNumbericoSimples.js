import { useContext, useEffect } from 'react'
import { listFilters, comparison } from '../../contexts/models'
import { SearchContext } from '../../contexts/SearchContext'

export const FiltroNumericoSimples = ({
  index,
  filter,
  onRemove,
  handleChange
}) => {
  const [filterContext, setFilterContext] = useContext(SearchContext)

  const previousChoosedOptions = filterContext.filters.filterByNumericValues
    .map((x) => (x.value !== undefined ? x.column : null))
    .slice(0, index)

  const columnOptions = listFilters.filter(
    (i) => !previousChoosedOptions.includes(i)
  )

  useEffect(() => {
    setFilterContext((prev) => {
      const { filterByName, filterByNumericValues } = prev.filters
      filterByNumericValues[index] = {
        column: columnOptions[0],
        comparison: comparison[0]
      }
      return {
        ...prev,
        filters: {
          filterByName,
          filterByNumericValues
        }
      }
    })
  }, [])

  return (
    <div>
      <select
        value={filter.column}
        onChange={(e) => handleChange(index, 'column', e)}
      >
        {columnOptions.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>

      <select onChange={(e) => handleChange(index, 'comparison', e)}>
        {comparison.map((comp) => (
          <option key={comp}>{comp}</option>
        ))}
      </select>

      <input
        type="number"
        onChange={(e) => handleChange(index, 'value', e)}
        value={filter.value ? filter?.value : ''}
      />

      <button onClick={() => onRemove(index)}>X</button>
    </div>
  )
}
