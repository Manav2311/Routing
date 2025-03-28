import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold tracking-wide">
          Employee Manager
        </h1>
        <nav className="space-x-4">
          <Link 
            to="/" 
            className="hover:text-teal-400 transition duration-200 font-medium"
          >
             Add New
          </Link>
          <Link 
            to="/view" 
            className="hover:text-teal-400 transition duration-200 font-medium"
          >
            View All
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
