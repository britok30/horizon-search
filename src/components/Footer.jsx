import React from 'react';

export const Footer = () => {
    const date = new Date();
    return (
        <div className="text-center p-10 mt-10 border-t dark:border-gray-700 border-gray-200">
            <h1>{`${date.getFullYear()} Horizon, Inc.`}</h1>
        </div>
    );
};
