import './App.css';
// import axios from 'axios';
// import { useEffect, useState } from 'react';

function App() {
  // const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  // const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

  // const [token, setToken] = useState('');
  // const [artists, setArtists] = useState([]);
  // const [search, setSearch] = useState('');

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

  // const handleSearch = (event) => {
  //   const { value } = event.target;
  //   setSearch(value);
  // };
  return (
    <div className="App">
      <h1>Muscape Search</h1>
      <h3>Enter search term</h3>
      <div className="search_header">
        <input type="text" />
        <button type="button">Search</button>
      </div>
      <ul>
        <li>
          <button className="nav_button" type="button" id="selected_button">
            Albums
          </button>
        </li>
        <li>
          <button className="nav_button" type="button">
            Artists
          </button>
        </li>
        <li>
          <button className="nav_button" type="button">
            Playlists
          </button>
        </li>
      </ul>
      <div className="artists">
        <div className="card">
          <img src="https://i.scdn.co/image/ab676161000051749d3f9efc8e0030306e583cef" alt="Error" />
          <p>Justin Temperlake</p>
          <p>Justin Temperlake</p>
          <small>classic</small>
          <small>pop</small>
        </div>
        <div className="card">
          <img src="https://i.scdn.co/image/ab676161000051749d3f9efc8e0030306e583cef" alt="Error" />
          <p>Justin Temperlake</p>
          <p>Justin Temperlake</p>
          <small>classic</small>
          <small>pop</small>
        </div>
        <div className="card">
          <img src="https://i.scdn.co/image/ab676161000051748ae7f2aaa9817a704a87ea36" alt="Error" />
          <p>Justin Temperlake</p>
          <p>Justin Temperlake</p>
          <small>classic</small>
          <small>pop</small>
        </div>
        <div className="card">
          <img src="https://i.scdn.co/image/ab676161000051748ae7f2aaa9817a704a87ea36" alt="Error" />
          <p>Justin Temperlake</p>
          <p>Justin Temperlake</p>
          <small>classic</small>
          <small>pop</small>
        </div>
      </div>
    </div>
  );
}

export default App;
