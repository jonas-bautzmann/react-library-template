import React, { useEffect, useRef } from 'react';
import videojs, { VideoJsPlayerOptions, VideoJsPlayer } from 'video.js';
import 'video.js/dist/video-js.min.css';

interface VideoPlayerProps {
  options: VideoJsPlayerOptions;
  onReady?: videojs.ReadyCallback;
}

const VideoPlayer = (args: VideoPlayerProps): JSX.Element => {
  const videoElement = useRef<HTMLVideoElement>(null);
  const player = useRef<VideoJsPlayer>();

  useEffect(() => {
    if (!videoElement.current) {
      return;
    }

    player.current = videojs(videoElement.current, args.options, args.onReady);

    return () => {
      player.current?.dispose();
    };
  }, [args]);

  return (
    <div className="video-player">
      <video className="video-js" ref={videoElement} />
    </div>
  );
};

export default VideoPlayer;
