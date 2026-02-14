import axios from "axios";

let api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default api;
