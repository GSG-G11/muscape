import './App.css';
import { useState } from 'react';
import Search from './components/Search';
import Selection from './components/Selection';
import Cards from './components/Cards';
// import axios from 'axios';

function App() {
  // const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  // const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

  // const [token, setToken] = useState('');
  // const [artists, setArtists] = useState([]);
  const [search, setSearch] = useState('');

  // useEffect(() => {
  //   console.log('Running');
  //   axios('https://accounts.spotify.com/api/token', {
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`
  //     },
  //     data: 'grant_type=client_credentials',
  //     method: 'POST'
  //   }).then((tokenResponse) => {
  //     setToken(tokenResponse.data.access_token);
  //     const apiUrl = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
  //       search
  //     )}&type=artist`;
  //     axios(apiUrl, {
  //       method: 'GET',
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     }).then((artistsResponse) => setArtists(artistsResponse.data.artists.items));
  //   });
  // }, [search]);
  const getSearch = (searchItem) => {
    setSearch(searchItem.trim());
  };

  return (
    <div className="App">
      <h1>Muscape Search</h1>
      <h3>Enter search term</h3>
      <Search getSearch={getSearch} />
      <Selection />
      <Cards />
    </div>
  );
}

export default App;
