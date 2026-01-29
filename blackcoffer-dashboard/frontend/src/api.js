import axios from "axios";

const API = axios.create({
  baseURL: "https://blackcoffer-backend.onrender.com/api",
});


export const fetchData = (params = {}) =>
  API.get("/data", { params });
