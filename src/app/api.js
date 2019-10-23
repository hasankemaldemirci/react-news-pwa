import axios from "axios";

const proxy = process.env.REACT_APP_PROXY;
const apiURL = process.env.REACT_APP_NEWS_API;
const apiKey = process.env.REACT_APP_NEWS_API_KEY;

export function fetchAPI() {
  const response = axios.get(
    `${proxy}/${apiURL}/top-headlines?country=tr&apiKey=${apiKey}`
  );

  return response;
}
