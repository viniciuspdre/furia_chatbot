import axios from 'axios';

export const axiosForPandaScore = axios.create({
  baseURL: 'https://api.pandascore.co/csgo',
  params: {
    token: process.env.PANDASCORE_TOKEN
  }
});

export const axiosForTwitter = axios.create({
  baseURL: 'https://api.x.com/2',
  headers: {
    Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
  }
})