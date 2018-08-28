import { fsId, fsSecret } from './apiKeys';

const api = 'https://api.foursquare.com/v2/venues/';
const version = '20180828';
const lang = 'en';

export const getDetails = (id) =>
  fetch(`${api}${id}?client_id=${fsId}&client_secret=${fsSecret}&v=${version}&locale=${lang}`)
    .then(res => res.json())
    .then(data => data.response.venue)
    .catch(err => console.log('Sorry pal, no venues today', err))
