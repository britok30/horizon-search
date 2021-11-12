import React from 'react';

export const ImageResult = ({ href, index, image, title }) => {
    return (
        <a
            className="sm:p-3 p-5"
            href={href}
            key={index}
            target="_blank"
            rel="noreferrer"
        >
            <img
                className="rounded"
                src={image?.src}
                alt={title}
                loading="lazy"
            />
            <p className="w-36 break-words text-sm mt-2">{title}</p>
        </a>
    );
};
