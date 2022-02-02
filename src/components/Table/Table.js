
import { useState, useContext, useEffect } from 'react';
import { DataContext } from '../../contexts/DataContext';

// import { SearchContext } from '../../App';

import './Table.css'


export const Table = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData, filtered, performFilter] = useContext(DataContext);
  
  useEffect(() => {
    
    fetch("https://swapi-trybe.herokuapp.com/api/planets/")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result.results)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>rotation_period</th>
            <th>orbital_period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface_water</th>
            <th>population</th>
            <th>films</th>
            <th>created</th>
            <th>edited</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(planet => (
            <tr key={planet.name}>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>
                {planet.films.map((value, index) => (<a key={`f`+ planet.name + index} href={value}>{index + 1}</a>)
                )}
              </td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td><a href={planet.url}>{planet.url}</a></td>

            </tr>
          ))}
        </tbody>
        
        
      </table>
      
    )

  }
  

}
    


