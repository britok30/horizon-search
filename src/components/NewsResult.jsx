import React from 'react';

export const NewsResult = ({ id, links, title, source }) => {
    return (
        <div key={id} className="md:w-2/5 w-full">
            <a
                className="hover:underline"
                href={links?.[0].href}
                target="_blank"
                rel="noreferrer"
            >
                <p className="text-lg dark:text-blue-300 text-blue-700">
                    {title}
                </p>
                <div className="flex gap-4">
                    <a href={source?.href} target="_blank" rel="noreferrer">
                        {source?.href}
                    </a>
                </div>
            </a>
        </div>
    );
};
