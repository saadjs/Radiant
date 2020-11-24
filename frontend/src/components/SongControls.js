import React, { useEffect } from "react";
import "./SongControls.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlayCircle,
	faPauseCircle,
	faForward,
	faBackward
} from "@fortawesome/free-solid-svg-icons";
import { playAudio } from "./util";

function Controls({
	playing,
	isPlaying,
	setIsPlaying,
	audioRef,
	setTime,
	time,
	songs,
	setPlaying,
	setSongs
}) {
	// element references
	useEffect(() => {
		const newSong = songs.map((song) => {
			if (song.id === playing.id) {
				return {
					...song,
					isPlaying: true
				};
			} else {
				return {
					...song,
					isPlaying: false
				};
			}
		});

		setSongs(newSong);
	}, [playing]);

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

	const nextLastSongHandler = (skip) => {
		let currentIdx = songs.findIndex((song) => song.id === playing.id);
		if (skip === "forward") {
			setPlaying(songs[(currentIdx + 1) % songs.length]);
		}
		if (skip === "rewind") {
			if ((currentIdx - 1) % songs.length === -1) {
				setPlaying(songs[songs.length - 1]);
				playAudio(isPlaying, audioRef);
				return;
			}
			setPlaying(songs[(currentIdx - 1) % songs.length]);
		}
		playAudio(isPlaying, audioRef);

		// console.log(currentIdx + 1);
	};

	// thanks stackoverflow!!!
	const formattedTime = (time) =>
		Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);

	const trackAnim = {
		transform: `translateX(${time.playTimePercent}%)`
	};
	return (
		<div className="control-container ">
			<div className="timer">
				<p>{formattedTime(time.current)}</p>
				<div
					style={{
						background: `linear-gradient(to right, ${playing.art[0]},${playing.art[1]})`
					}}
					className="track"
				>
					<input
						min={0}
						max={time.length || 0}
						value={time.current}
						onChange={dragSlider}
						type="range"
					/>
					<div className="animate-track" style={trackAnim}></div>
				</div>

				<p>{time.length ? formattedTime(time.length) : "0:00"}</p>
			</div>
			<div className="play-pause">
				<FontAwesomeIcon
					onClick={() => nextLastSongHandler("rewind")}
					className="rewind"
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
					onClick={() => nextLastSongHandler("forward")}
					className="forward"
					icon={faForward}
					size="2x"
				/>
			</div>
		</div>
	);
}

export default Controls;
