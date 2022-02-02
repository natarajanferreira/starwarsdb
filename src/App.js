import React from 'react'
import { FiltroNome } from './components/FiltroNome/Filtro';
// import FiltroNumerico from './components/FiltroNumerico/FiltroNumerico';
import { FiltroNumerico } from './components/FiltroNumerico/FiltroNumerico';
import { Table } from './components/Table/Table';
import { DataProvider} from './contexts/DataContext';
import { SearchProvider } from './contexts/SearchContext';
// import './App.css';


function App() {
  return (
    <DataProvider>
      <SearchProvider>
        <FiltroNome />
        <FiltroNumerico />
        <Table />
      </SearchProvider>
    </DataProvider>
  )
}

export default App;
