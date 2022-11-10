import React from 'react';
import './VideoItem.css'
import 'semantic-ui-css/semantic.min.css'

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        // Use the call-back function because you can't just pass in onVideoSelect since you want the video parameter passed through. However! Can't simply do onVideoSelect(video) because... JavaScript will simply call the method directly. For the purposes of the event-handler, must use call-bacl.
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url}/>
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>);
};

export default VideoItem;