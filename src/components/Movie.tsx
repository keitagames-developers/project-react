import React from "react";
import ReactPlayer from "react-player";

type VideoPlayerProps = {
  url: string; // 動画のURL
  autoPlay?: boolean; // 自動再生
  loop?: boolean; // ループ再生
  muted?: boolean; // ミュート
  controls?: boolean; // コントロール表示
  onPlay?: () => void;
  onPause?: () => void;
};

const Movie: React.FC<VideoPlayerProps> = ({
  url,
  autoPlay = false,
  loop = false,
  muted = false,
  controls = true,
  onPlay,
  onPause,
}) => {
  return (
    <div style={{ position: "relative", paddingTop: "56.25%" }}>
      <ReactPlayer
        url={url}
        playing={autoPlay}
        loop={loop}
        muted={muted}
        controls={controls}
        onPlay={onPlay}
        onPause={onPause}
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0 }}
      />
    </div>
  );
};

export default Movie;
