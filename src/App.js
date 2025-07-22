import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ItemDetails from './pages/ItemDetails';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ItemForm from './components/Item/ItemForm';
import ClaimForm from './components/Claim/ClaimForm';
import Navbar from './components/Navbar';
import ItemList from './components/Item/ItemList'; // Correct path to ItemList


const App = () => {
    return (
        <Router>
            <ToastContainer position="top-right" autoClose={3000} />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/item" element={<ItemDetails />} />
                <Route path="/item/:id" element={<ItemDetails />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/add-item" element={<ItemForm />} />
                <Route path="/submit-claim" element={<ClaimForm />} />
                <Route path="/items" element={<ItemList />} />
            </Routes>
        </Router>
    );
};

export default App;