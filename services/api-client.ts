import axios from "axios";


const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_LERNDISE_BASE_URL}`,
});



export default axiosInstance;