
import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResultList from './components/SearchBar/SearchResultList';

function App() {

  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <div className='searchbar-container'>
        <SearchBar setResults={setResults}/>
        <SearchResultList  results={results} />
      </div>
    </div>
  );
}

export default App;
