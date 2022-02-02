import axios from "axios";

export const key = process.env.REACT_APP_BITLY_TOKEN;

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    'Authorization': `Bearer ${key}`
  }
})

export default api;