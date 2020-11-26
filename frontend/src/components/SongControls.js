import React, { useEffect, useState } from "react";
import "./SongControls.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlayCircle,
	faPauseCircle,
	faForward,
	faBackward,
	faVolumeDown,
	faVolumeUp,
	faVolumeMute
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
	// set current song is Playing or not, do stuff accordingly
	const [volume, setVolume] = useState({
		currentVolume: 1
	});

	useEffect(() => {
		const newSong =
			songs &&
			songs.map((song) => {
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

	// play/pause button handler
	const play = () => {
		if (isPlaying) {
			audioRef.current.pause();
			setIsPlaying(!isPlaying);
		} else {
			audioRef.current.play();
			setIsPlaying(!isPlaying);
		}
	};

	// time slider handler
	const dragSlider = (e) => {
		audioRef.current.currentTime = e.target.value;
		setTime({
			...time,
			current: e.target.value
		});
	};
	// volume handler
	const handleVolume = (e) => {
		audioRef.current.volume = e.target.value;
		setVolume({
			...volume,
			currentVolume: e.target.value
		});
	};
	// forward and rewind button handler
	const nextLastSongHandler = async (skip) => {
		let currentIdx =
			songs && songs.findIndex((song) => song.id === playing.id);
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
	// format the playing time in min:sec format
	const formattedTime = (time) =>
		Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);

	// song progress bar increases according to the song play time
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
			<div
				id="volume-controls"
				style={{ color: `${playing.art && playing.art[0]}` }}
			>
				<FontAwesomeIcon
					id="fa-volume-icon"
					onClick={() => {
						if (volume.currentVolume) {
							audioRef.current.volume = 0;
							setVolume({ ...volume, currentVolume: 0 });
						} else if (!volume.currentVolume) {
							audioRef.current.volume = 0.5;
							setVolume({ ...volume, currentVolume: 0.5 });
						}
					}}
					icon={
						volume.currentVolume >= 0.5
							? faVolumeUp
							: volume.currentVolume < 0.5 &&
							  volume.currentVolume > 0
							? faVolumeDown
							: faVolumeMute
					}
					size="2x"
				/>
				<input
					id="volume-control-slider"
					type="range"
					onChange={handleVolume}
					value={volume.currentVolume}
					min={0}
					max={1.0}
					step={0.01}
				/>
			</div>
		</div>
	);
}

export default Controls;
