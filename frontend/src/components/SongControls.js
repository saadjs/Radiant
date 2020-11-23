import React, { useRef, useState } from "react";
import "./SongControls.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlayCircle,
	faPauseCircle,
	faForward,
	faBackward
} from "@fortawesome/free-solid-svg-icons";

function Controls({ playing, isPlaying, setIsPlaying }) {
	const [time, setTime] = useState({
		current: 0,
		length: 0
	});

	// element references
	const audioRef = useRef(null);

	// Song Controls
	const play = () => {
		if (isPlaying) {
			audioRef.current.pause();
			setIsPlaying(!isPlaying);
		} else {
			audioRef.current.play();
			setIsPlaying(!isPlaying);
		}
	};

	const dragSlider = (e) => {
		audioRef.current.currentTime = e.target.value;
		setTime({
			...time,
			current: e.target.value
		});
	};

	// thanks stackoverflow!!!
	const formattedTime = (time) =>
		Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);

	const timeUpdater = (e) => {
		const current = e.target.currentTime;
		const length = e.target.duration;
		setTime({ ...time, current, length });
	};

	return (
		<div className="control-container ">
			<div className="timer">
				<p>{formattedTime(time.current)}</p>
				<input
					min={0}
					max={time.length}
					value={time.current}
					onChange={dragSlider}
					type="range"
				/>
				<p>{formattedTime(time.length)}</p>
			</div>
			<div className="play-pause">
				<FontAwesomeIcon
					className="forward"
					icon={faBackward}
					size="2x"
				/>
				<FontAwesomeIcon
					className="play"
					onClick={play}
					icon={isPlaying ? faPauseCircle : faPlayCircle}
					size="2x"
				/>
				<FontAwesomeIcon
					className="rewind"
					icon={faForward}
					size="2x"
				/>
			</div>
			<audio
				ref={audioRef}
				src={playing.mp3}
				onTimeUpdate={timeUpdater}
				onLoadedMetadata={timeUpdater}
			></audio>
		</div>
	);
}

export default Controls;
