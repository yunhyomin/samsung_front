import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { ElMessage } from "element-plus";

export interface ResponseData {
  code: number;
  data?: any;
  message: string;
}


// console.log('import.meta.env: ', import.meta.env);

// Create axios instance
let service: AxiosInstance | any;
if (import.meta.env.MODE === "development") {
  service = axios.create({
    baseURL: "/api", // base_url of the api
    timeout: 50000 // request timeout
  });
} else {
  // in production environment
  service = axios.create({
    baseURL: "/api",
    timeout: 50000
  });
}

// Some configurations of request interceptor axios
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error: any) => {
    // Do something with request error
    console.error("error:", error); // for debug
    Promise.reject(error);
  }
);

// Some configurations of the response interceptor axios
service.interceptors.response.use(
  (res: AxiosResponse) => {
    // Some example codes here:
    // code == 0: success
    if (res.status === 200) {
      const data: ResponseData = res.data
      if (data.code === 0) {
        return data.data;
      } else {
        ElMessage({
          message: data.message,
          type: "error"
        });
      }
    } else {
      ElMessage({
        message: "Network Error!",
        type: "error"
      });
      return Promise.reject(new Error(res.data.message || "Error"));
    }
  },
  (error: any) => Promise.reject(error)
);

export default service;
