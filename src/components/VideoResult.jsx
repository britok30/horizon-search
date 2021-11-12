import React from 'react';
import ReactPlayer from 'react-player';

const VideoResult = ({ video }) => {
    return (
        <ReactPlayer
            url={video.additional_links[0].href}
            controls
            width="355px"
            height="200px"
        />
    );
};

export default VideoResult;
