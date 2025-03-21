import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-zinc-800 p-6 rounded-xl shadow-lg flex justify-start space-x-8 text-white text-xl font-semibold">
      <Link to='/' className="px-4 py-2 rounded-lg bg-zinc-700 hover:bg-cyan-500 transition duration-300">Home</Link>
      <Link to='/show' className="px-4 py-2 rounded-lg bg-zinc-700 hover:bg-cyan-500 transition duration-300">Show</Link>
    </div>
  );
};

export default Header;
