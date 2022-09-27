import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080",
});

axiosClient.interceptors.response.use((resp) => {
  return resp.data;
});

export default axiosClient;
