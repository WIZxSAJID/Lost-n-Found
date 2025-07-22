import React from 'react';
import Navbar from '../components/Navbar';

const ItemDetails = () => {
    return (
        <div>
            <Navbar />
            <h1 className="text-3xl font-bold text-center mt-10">Item Details</h1>
            <p className="text-center mt-4">Detailed information about the item will be displayed here.</p>
        </div>
    );
};

export default ItemDetails;
