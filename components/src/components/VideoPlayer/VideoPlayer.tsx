import React, { useEffect, useRef } from 'react';
import videojs, { VideoJsPlayerOptions, VideoJsPlayer } from 'video.js';

interface VideoPlayerProps {
  options: VideoJsPlayerOptions;
}

const VideoPlayer = ({ options }: VideoPlayerProps): JSX.Element => {
  const videoElement = useRef<HTMLVideoElement>(null);
  const player = useRef<VideoJsPlayer>();

  useEffect(() => {
    if (!videoElement.current) {
      return;
    }

    player.current = videojs(videoElement.current, options);

    return () => {
      player.current?.dispose();
    };
  }, [options]);

  return (
    <div className="video-player">
      <video className="video-js" ref={videoElement} />
    </div>
  );
};

export default VideoPlayer;
