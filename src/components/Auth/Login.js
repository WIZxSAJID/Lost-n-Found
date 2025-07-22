import React, { useState } from 'react';
import { loginUser } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await loginUser(email, password);
            localStorage.setItem('userToken', data.token);
            toast.success('Login successful!');
            navigate('/profile');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4 text-white">Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 mb-4 w-full bg-gray-700 text-white"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 mb-4 w-full bg-gray-700 text-white"
                    required
                />
                <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700 transition duration-300">Login</button>
                <p className="mt-4 text-center text-white">
                    <a href="/register" className="text-blue-500">Don't have an account?</a>
                </p>
            </form>
        </div>
    );
};

export default Login;