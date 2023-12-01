import YouTube from 'react-youtube';
import React, { Suspense, lazy } from 'react';

const LazyYoutubePlayer = lazy(() => import('react-youtube'));



const YouTubePlayer = ({youtubeLink}) => {
  const videoId = {youtubeLink}; // Replace this with your YouTube video ID

  const opts = {
    height: '300',
    width: '320',
    playerVars: {
      autoplay: 0, // Set to 1 for autoplay
    },
  };

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo(); // For example, you can pause the video here
  };

  return (
    <div><Suspense fallback={<div>Loading...</div>}>

      <YouTube videoId={youtubeLink} opts={opts} onReady={onReady}  />
      </Suspense></div>
  );
};

  

export default YouTubePlayer;
