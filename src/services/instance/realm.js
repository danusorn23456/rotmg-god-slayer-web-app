import axios from "axios";

const realm = axios.create({
  baseURL: "https://realmeye-api.glitch.me/",
  timeout: 1000,
});

export { realm };
