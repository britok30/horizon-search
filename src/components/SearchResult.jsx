import React from 'react';

export const SearchResult = ({ index, link, title }) => {
    return (
        <div key={index} className="md:w-2/5 w-full">
            <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                    {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                    {title}
                </p>
            </a>
        </div>
    );
};
