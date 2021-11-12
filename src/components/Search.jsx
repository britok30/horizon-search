import React from 'react';

export const Search = () => {
    return (
        <div>
            <input
                type="text"
                className="p-2 rounded-md focus:outline-none dark:bg-gray-500"
                placeholder="Search..."
            />
        </div>
    );
};
