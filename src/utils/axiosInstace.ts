import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://api.pandascore.co/csgo',
  params: {
    token: process.env.PANDASCORE_TOKEN
  }
});