import './App.css';
import { useEffect, useState } from 'react';
import Search from './components/Search';
import Selection from './components/Selection';
import Cards from './components/Cards';
import getData from './utils/apiData';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getData(search).then((response) => setData(response.data.artists.items));
  }, [search]);

  const getSearch = (searchItem) => {
    setSearch(searchItem.trim());
  };

  return (
    <div className="App">
      <h1>Muscape Search</h1>
      <h3>Enter search term</h3>
      <Search getSearch={getSearch} />
      <Selection />
      {console.log(data)}
      <Cards artists={data} />
    </div>
  );
}

export default App;
