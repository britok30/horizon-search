import React from 'react';
import ReactPlayer from 'react-player';

const VideoResult = ({ video, index }) => {
    return (
        <div key={index} className="p-2">
            <ReactPlayer
                url={video.additional_links?.[0].href}
                controls
                width="355px"
                height="200px"
            />
        </div>
    );
};

export default VideoResult;
