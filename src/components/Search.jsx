import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useResultContext } from '../contexts/ResultContextProvider';
import Links from './Links';

export const Search = () => {
    const [text, setText] = useState('Google');
    const { setSearchTerm } = useResultContext();
    const [debouncedValue] = useDebounce(text, 300);

    useEffect(() => {
        if (debouncedValue) setSearchTerm(debouncedValue);
        // eslint-disable-next-line
    }, [debouncedValue]);

    return (
        <div className="relative mt-4 w-full flex flex-col items-center">
            <div className="flex justify-center items-center">
                <input
                    type="text"
                    className="rounded-lg dark:bg-gray-500 sm:w-96 h-10 border shadow-sm outline-none focus:outline-none p-6 text-black hover:shadow-lg"
                    placeholder="Search Horizon or type URL"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                {text !== '' && (
                    <button
                        type="button"
                        className="text-2xl text-gray-500 ml-4"
                        onClick={() => setText('')}
                    >
                        X
                    </button>
                )}
            </div>

            <Links />
        </div>
    );
};
