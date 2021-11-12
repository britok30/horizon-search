import React from 'react';
import { useResultContext } from '../contexts/ResultContextProvider';
import Links from './Links';

export const Search = () => {
    const { searchTerm } = useResultContext();
    return (
        <div className="mt-4 w-full flex flex-col items-center">
            <input
                type="text"
                className="p-2 rounded-md focus:outline-none dark:bg-gray-500 w-1/2"
                placeholder="Search..."
                onChange={(e) => e.target.value}
            />
            <Links />
        </div>
    );
};
