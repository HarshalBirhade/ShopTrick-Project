import axios from "axios";

const instance = axios.create({
  baseURL: "https://shoptrick.onrender.com",
  withCredentials: true,
});

export default instance;
