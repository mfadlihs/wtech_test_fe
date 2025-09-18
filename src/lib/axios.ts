import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

export type ApiResponse<T> = {
  message: string;
  status: number;
  data?: T;
};

class ApiService {
  private axiosInstance: AxiosInstance;

  constructor() {
    const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
    this.axiosInstance = axios.create({ baseURL: BASE_URL });

    // Example request interceptor (add headers/auth if needed)
    this.axiosInstance.interceptors.request.use((config) => {
      return config;
    });
  }

  private normalizeSuccess<T>(
    status: number,
    data: T,
    message = "OK"
  ): ApiResponse<T> {
    return { message, status, data };
  }

  private normalizeError<T>(error: unknown): ApiResponse<T> {
    if (axios.isAxiosError(error)) {
      const err = error as AxiosError<{ message?: string }>;
      const status = err.response?.status ?? 500;
      const message =
        err.response?.data?.message || err.message || "Request failed";
      return { message, status };
    }
    return { message: "Unexpected error", status: 500 };
  }

  async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const res = await this.axiosInstance.get<T>(url, config);
      return this.normalizeSuccess<T>(res.status, res.data);
    } catch (error) {
      return this.normalizeError<T>(error);
    }
  }

  async post<T>(
    url: string,
    body?: unknown,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const res = await this.axiosInstance.post<T>(url, body, config);
      return this.normalizeSuccess<T>(res.status, res.data);
    } catch (error) {
      return this.normalizeError<T>(error);
    }
  }

  async put<T>(
    url: string,
    body?: unknown,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const res = await this.axiosInstance.put<T>(url, body, config);
      return this.normalizeSuccess<T>(res.status, res.data);
    } catch (error) {
      return this.normalizeError<T>(error);
    }
  }

  async patch<T>(
    url: string,
    body?: unknown,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const res = await this.axiosInstance.patch<T>(url, body, config);
      return this.normalizeSuccess<T>(res.status, res.data);
    } catch (error) {
      return this.normalizeError<T>(error);
    }
  }

  async delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const res = await this.axiosInstance.delete<T>(url, config);
      return this.normalizeSuccess<T>(res.status, res.data);
    } catch (error) {
      return this.normalizeError<T>(error);
    }
  }
}

export default ApiService;
