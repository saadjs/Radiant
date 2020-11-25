import React, { useEffect } from "react";
import "./SongControls.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlayCircle,
	faPauseCircle,
	faForward,
	faBackward
} from "@fortawesome/free-solid-svg-icons";

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

	const nextLastSongHandler = async (skip) => {
		let currentIdx = songs.findIndex((song) => song.id === playing.id);
		if (skip === "forward") {
			await setPlaying(songs[(currentIdx + 1) % songs.length]);
		}
		if (skip === "rewind") {
			if ((currentIdx - 1) % songs.length === -1) {
				await setPlaying(songs[songs.length - 1]);
				if (isPlaying) audioRef.current.play();

				return;
			}
			await setPlaying(songs[(currentIdx - 1) % songs.length]);
		}
		if (isPlaying) audioRef.current.play();
	};

	// thanks stackoverflow!!!
	const formattedTime = (time) =>
		Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);

	const trackAnim = {
		transform: `translateX(${time.playTimePercent}%)`
	};
	return (
		<div className="control-container">
			<div className="timer">
				<p>{formattedTime(time.current)}</p>
				<div
					style={{
						background: `linear-gradient(to left, ${
							playing.art && playing.art[0]
						},${playing.art && playing.art[1]})`
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
					<div className="track-wrapper" style={trackAnim}></div>
				</div>

				<p>{time.length ? formattedTime(time.length) : "0:00"}</p>
			</div>
			<div
				className="play-pause"
				style={{ color: `${playing.art && playing.art[0]}` }}
			>
				<FontAwesomeIcon
					onClick={() => nextLastSongHandler("rewind")}
					className="rewind"
					icon={faBackward}
					size="2x"
				/>
				<FontAwesomeIcon
					className="play"
					onClick={play}
					icon={playing && isPlaying ? faPauseCircle : faPlayCircle}
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
