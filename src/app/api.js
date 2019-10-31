import axios from "axios";

const proxy = process.env.REACT_APP_PROXY;
const apiURL = process.env.REACT_APP_NEWS_API;
const apiKey = process.env.REACT_APP_NEWS_API_KEY;

export function fetchAPI(page, pageSize) {
  const response = axios.get(
    `${proxy}/${apiURL}/top-headlines?country=tr&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`
  );

  return response;
}
