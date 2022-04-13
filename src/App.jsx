import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

  const [token, setToken] = useState('');
  const [artists, setArtists] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log('Running');
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    }).then((tokenResponse) => {
      setToken(tokenResponse.data.access_token);
      const apiUrl = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
        search
      )}&type=artist`;
      axios(apiUrl, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((artistsResponse) => setArtists(artistsResponse.data.artists.items));
    });
  }, [search]);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearch(value);
  };
  return (
    <div className="App">
      <div>{search}</div>
      {artists.slice(0, 10).map((ele) => (
        <>
          <img
            src={
              ele.images[0].url
                ? ele.images[0].url
                : 'https://i.scdn.co/image/ab6761610000e5ebed3a04c76cbc92b97f59c3c0'
            }
            alt=""
          />
          <h1>{ele.name}</h1>
          {ele.genres.map((genre) => <h1>{genre}</h1>)}
          <h1>{ele.external_urls.spotify}</h1>
        </>
      ))}
      <input type="text" onChange={handleSearch} />
    </div>
  );
}

export default App;
