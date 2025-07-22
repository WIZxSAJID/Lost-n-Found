import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-950 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">Lost-n-Found</div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:underline">Home</Link>
          <Link to="/profile" className="text-white hover:underline">Profile</Link>
          {/* <Link to="/items" className="text-white hover:underline">Items</Link> */}
          <Link to="/login" className="text-white hover:underline">Login</Link>
          <Link to="/register" className="text-white hover:underline">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
