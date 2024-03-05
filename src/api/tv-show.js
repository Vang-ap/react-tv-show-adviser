import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY_PARAM = "?api_key=67352421f8a857ecd5f1aa362e14aa31";

export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
    console.log('** response', response.data.results);
    return response.data.results;
  };
} 