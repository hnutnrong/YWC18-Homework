import axios from 'axios';

const data = () => {

  return axios.create({
    baseURL: `https://panjs.com/ywc18.json`,
  });

};

export default {
  get: () => {
    return data().request({});
  }
}