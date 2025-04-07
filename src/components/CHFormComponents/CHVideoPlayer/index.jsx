import React, { useRef, useState } from "react";
import styles from "./CHVideoPlayer.module.css";
import { Icons } from "../../../constants";
import clsx from "clsx";

export const CHVideoPlayer = ({
  videoSrc,
  poster,
  endingContent,
  modalOpen,
  ...rest
}) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const video = useRef();

  function videoPauseHandler(e) {
    if (e.target.readyState == 4) {
      setIsVideoPlaying(false);
    }
  }

  function videoPlayHandler() {
    setIsVideoPlaying(true);
    setIsFinished(false);
    video.current.play();
  }

  function handleVideoEnded() {
    setIsFinished(true);
  }

  return (
    <div className={clsx(styles.videoWrapper, "ratio ratio-16x9")}>
      <div>
        <video
          poster={poster}
          ref={video}
          className={styles.video}
          onPause={videoPauseHandler}
          src={videoSrc}
          onEnded={handleVideoEnded}
          controls
          {...rest}
        />
        {!isVideoPlaying && (
          <div className={styles.overlay} onClick={videoPlayHandler}>
            {!isVideoPlaying && !isFinished && Icons.VideoPlay}
            {!isVideoPlaying && isFinished && (
              <div className="text-center">
                <div className={clsx(styles.videoRestartIcon, "clr-white")}>
                  {Icons.FilledRestart}
                </div>
                <div className="clr-white h4 fw-medium">Replay</div>

                <div className="mt-4">{endingContent}</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
