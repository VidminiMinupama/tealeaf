import React from 'react';
import './home.css';
import ReactPlayer from 'react-player';

const Home1 = () => {
  
  const videoUrl = 'https://media.istockphoto.com/id/1223956282/video/steadicam-shot-of-tea-plantations-in-munnar-india.mp4?s=mp4-640x640-is&k=20&c=0D1eI48gJE6DHNZot5YLMH4QogwGiC8jXn4hIa83Vhw=';

  return (
    <div id="home">
      <ReactPlayer
        url={videoUrl}
        width="100%"
        height="100%"
        playing
        loop
        muted
        controls={false}
        className="video-background"
      />
    </div>
  );
};

export default Home1;




