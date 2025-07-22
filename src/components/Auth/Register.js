import React, { useState } from 'react';
import { registerUser } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser(name, email, password);
            toast.success('Registration successful! Please login.');
            navigate('/login');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Registration failed. Please try again.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4 text-white">Register</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 mb-4 w-full bg-gray-700 text-white"
                    required
                />
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
                <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700 transition duration-300">Register</button>
                <p className="mt-4 text-center text-white">
                 <label>
                    <input type="checkbox" required className="mr-2" />
                    I agree to the terms and conditions
                </label>

                </p>
            </form>
        </div>
    );
};

export default Register;