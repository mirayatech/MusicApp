import React, { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBackwardStep,
  faPlay,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong }) => {
  // ref
  const audioRef = useRef(null);
  // event Handler
  const playSongHandler = () => {
    console.log(audioRef);
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          size="2x"
          icon={faBackwardStep}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faForwardStep}
        />
      </div>
      <audio ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
};

export default Player;
