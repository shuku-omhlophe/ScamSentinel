import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchTransactions = async () => {
  const response = await apiClient.get("/transactions/");
  return response.data;
};

export const fetchTransactionById = async (id) => {
  const response = await apiClient.get(`/transactions/${id}/`);
  return response.data;
};

export const createTransaction = async (txData) => {
  const response = await apiClient.post("/transactions/", txData);
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await apiClient.post("/auth/login/", credentials);
  return response.data;
};

export const registerUser = async (userData) => {
  const response = await apiClient.post("/auth/register/", userData);
  return response.data;
};

export default apiClient;
