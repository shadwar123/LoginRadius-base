import axios from "axios";
import { useRouter } from "next/navigation";

export const useAPI = () => {
  const router = useRouter();
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token && token.length !== 0)
        config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error) => Promise.reject(error)
  );

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        localStorage.removeItem("token");
        router.push("/");
      }
      return Promise.reject(error);
    }
  );

  return api;
};
