// src/layouts/DashboardLayout.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '../features/auth/AuthContext'; // To access logout

const DashboardLayout = () => {
  const { logout } = useAuth(); // Assume you have a logout function in your AuthContext

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">My Dashboard</h2>
        <nav>
          <ul>
            <li className="mb-4">
              <Link to="/dashboard" className="text-lg hover:text-indigo-300">Overview</Link>
            </li>
            <li className="mb-4">
              <Link to="/dashboard/reports" className="text-lg hover:text-indigo-300">Reports</Link>
            </li>
            <li className="mb-4">
              <Link to="/dashboard/users" className="text-lg hover:text-indigo-300">Users</Link>
            </li>
            <li className="mb-4">
              <Link to="/dashboard/settings" className="text-lg hover:text-indigo-300">Settings</Link>
            </li>
          </ul>
        </nav>
        <button
          onClick={logout}
          className="mt-8 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Logout
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8">
        <header className="bg-white shadow p-6 rounded-lg mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">Welcome to your Dashboard!</h1>
        </header>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Outlet /> {/* Renders nested dashboard routes here */}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout; 