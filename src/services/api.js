// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/users'; // Adjust if your backend is hosted elsewhere

// User Registration
export const registerUser = async (name, email, password) => {
    const response = await axios.post(`${API_URL}/register`, { name, email, password });
    return response.data;
};

// User Login
export const loginUser = async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
};

// Get User Profile
export const getUserProfile = async (token) => {
    const response = await axios.get(`${API_URL}/profile`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

// User Logout
export const logoutUser = async (token) => {
    const response = await axios.post(`${API_URL}/logout`, {}, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

// Add New Item
export const addItem = async (itemData) => {
    const response = await axios.post('http://localhost:8000/api/items', itemData);
    return response.data;
};

// Add New Item to User
export const addItemToUser = async (token, itemData) => {
    const response = await axios.post(`${API_URL}/items`, itemData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

// Get All Items
export const getItems = async () => {
    const response = await axios.get('http://localhost:8000/api/items');
    return response.data;
};

// Fetch All Items
export const fetchAllItems = async () => {
    const response = await axios.get('http://localhost:8000/api/items');
    return response.data;
};