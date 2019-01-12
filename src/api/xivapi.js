import axios from 'axios';

export default axios.create({
  baseURL: `https://xivapi.com/`,
  params: {
    key: 'a71e473b9037419cb588f0d2'
  }
});
