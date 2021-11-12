import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useResultContext } from '../contexts/ResultContextProvider';
import { Loading } from './Loading';
import { NewsResult } from './NewsResult';
import { ImageResult } from './ImageResult';
import { SearchResult } from './SearchResult';
import VideoResult from './VideoResult';

export const Results = () => {
    const { results, isLoading, getResults, searchTerm } = useResultContext();
    const location = useLocation();
    const TOTAL_RESULTS = 30;

    useEffect(() => {
        if (!searchTerm) return;

        if (location.pathname === '/videos') {
            getResults(`/search/q=${searchTerm} videos`);
        } else {
            getResults(
                `${location.pathname}/q=${searchTerm}&num=${TOTAL_RESULTS}`
            );
        }
        // eslint-disable-next-line
    }, [searchTerm, location.pathname]);

    if (isLoading) return <Loading />;

    switch (location.pathname) {
        case '/search':
            return (
                <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
                    {results?.map(({ link, title }, index) => (
                        <SearchResult link={link} title={title} index={index} />
                    ))}
                </div>
            );
        case '/images':
            return (
                <div className="flex flex-wrap justify-center items-center">
                    {results?.map(({ image, link: { href, title } }, index) => (
                        <ImageResult
                            image={image}
                            href={href}
                            title={title}
                            index={index}
                        />
                    ))}
                </div>
            );
        case '/news':
            return (
                <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
                    {results?.map(({ links, id, source, title }) => (
                        <NewsResult
                            id={id}
                            links={links}
                            source={source}
                            title={title}
                        />
                    ))}
                </div>
            );
        case '/videos':
            return (
                <div className="flex flex-wrap justify-center">
                    {results?.map((video, index) => (
                        <div key={index} className="p-2">
                            <VideoResult video={video} />
                        </div>
                    ))}
                </div>
            );

        default:
            return 'ERROR';
    }
};
