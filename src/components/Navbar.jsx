import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = ({ darkTheme, setDarkTheme }) => {
    return (
        <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
            <div className="flex justify-between items-center space-x-5 w-screen">
                <Link to="/">
                    <p className="text-2xl font-bold text-white py-1 px-2 bg-blue-500 rounded dark:bg-gray-500 dark:text-gray-900">
                        Horizon 🔎
                    </p>
                </Link>
                <button
                    type="button"
                    className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border w-20 rounded-md px-2 py-1 hover:shadow-lg transition-all duration-300 ease-in-out"
                    onClick={() => setDarkTheme(!darkTheme)}
                >
                    {darkTheme ? 'Light' : 'Dark'}
                </button>
            </div>
        </div>
    );
};
