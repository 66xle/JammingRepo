import { Buffer } from 'buffer'

/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/documentation/web-api/tutorials/client-credentials-flow
 */

var client_id = '02938e820286419d8edc9073d3d3f97f';
var client_secret = '86b3844c78cf4bdcb0a7fb7f01a77da8';

async function getToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: new URLSearchParams({
      'grant_type': 'client_credentials',
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
    },
  });

  return await response.json();
}

async function getTrackInfo(access_token) {
  const response = await fetch("https://api.spotify.com/v1/recommendations/available-genre-seeds", {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + access_token },
  });

  return await response.json();
}

async function getTracks(access_token, query) {
    const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + access_token },
  });

  

  const data = await response.json();

  return data.tracks.items;
}



// getToken().then(response => {
//   getTrackInfo(response.access_token).then(profile => {
//     console.log(profile)
//   })
// });

export { getToken, getTracks, getTrackInfo }