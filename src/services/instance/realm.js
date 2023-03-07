import axios from "axios";

const realm = axios.create({
  baseURL: "http://localhost:8000/",
  timeout: 1000,
});

export { realm };
