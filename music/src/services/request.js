import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          console.log("error");
          break;
        case 401:
          console.log("Authored");
          break;
        default:
          console.log("Other Error");
          break;
      }
    }
    return err;
  }
);

export default instance;
