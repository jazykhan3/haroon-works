import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Our Application
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Get started by logging in to access your dashboard.
        </p>
        <div className="space-x-4">
          <a 
            href="/login" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Login
          </a>
          <a 
            href="/dashboard" 
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded transition duration-300"
          >
            Dashboard
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 