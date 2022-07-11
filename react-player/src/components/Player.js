import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBackwardStep,
  faPlay,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";

const Player = () => {
  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="play" size="2x" icon={faBackwardStep} />
        <FontAwesomeIcon className="skip-back" size="2x" icon={faPlay} />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faForwardStep}
        />
      </div>
    </div>
  );
};

export default Player;
