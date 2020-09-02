import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';

function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
    // if video is playing
    // stop it

    // otherwise if its not playing
    // play it
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src="https://v77.tiktokcdn.com/c184e12032244c18186dd5985ea14a12/5f503e18/video/tos/alisg/tos-alisg-pve-0037/4ca742d43bd942e8b3c7885b9f5155d6/?a=1233&br=3310&bt=1655&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20200902185058010189065105341F3237&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2tlOXBueGpxdzMzZDczM0ApZ2RnM2QzZ2RoNzQ3aTloOGdibGhwYWc2LjNfLS00MTRzc2FfM2IyXl5hMi82NmAtMC06Yw%3D%3D&vl=&vr="
      ></video>

      <VideoFooter />

      {/* Video Footer */}
      {/* Video SideBar */}
    </div>
  );
}

export default Video;
