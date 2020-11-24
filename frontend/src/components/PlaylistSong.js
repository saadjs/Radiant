import React from "react";

import "./Song.css";

function PlaylistSong({
	song,
	songs,
	setPlaying,
	audioRef,
	isPlaying,
	id,
	setSongs
}) {
	const playSong = async () => {
		const selectedSong = songs.filter((state) => state.id === id);
		await setPlaying(selectedSong[0]);

		const newSong = songs.map((song) => {
			if (song.id === id) {
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
		if (isPlaying) audioRef.current.play();
	};
	return (
		<div
			className={`playlist-song ${song.isPlaying ? "selected" : ""}`}
			onClick={playSong}
		>
			<img src={song.photo} alt={song.songName} />
			<div className="song-info">
				<h3>{song.songName}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
	);
}

export default PlaylistSong;
