import axios from 'axios';
import verifyToken from './verifyToken';

const getData = (search) => verifyToken().then((tokenResponse) => {
  const apiUrl = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
    search
  )}&type=album,playlist,artist`;

  return axios(apiUrl, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${tokenResponse.data.access_token}`
    }
  });
});

export default getData;
