// /src/api/auth.js
import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/auth`;

export async function login(email, password) {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Login failed";
  }
}

export async function register(username, email, password, role_id) {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      username,
      email,
      password,
      role_id,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Registration failed";
  }
}



