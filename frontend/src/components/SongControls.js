import React from "react";
import "./SongControls.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlayCircle,
	faForward,
	faBackward
} from "@fortawesome/free-solid-svg-icons";

function Controls() {
	return (
		<div className="control-container ">
			<div className="timer">
				<p>Start Time</p>
				<input type="range" />
				<p>End Time</p>
			</div>
			<div className="play-pause">
				<FontAwesomeIcon
					className="forward"
					icon={faBackward}
					size="2x"
				/>
				<FontAwesomeIcon
					className="play"
					icon={faPlayCircle}
					size="2x"
				/>
				<FontAwesomeIcon
					className="rewind"
					icon={faForward}
					size="2x"
				/>
			</div>
		</div>
	);
}

export default Controls;
