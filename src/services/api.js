import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL: "https://converter-backend-dhhr.onrender.com/api",
  // https://converter-backend-dhhr.onrender.com
});

export default API;
