import React from "react";

import "./Song.css";

function PlaylistSong({ song, songs, setPlaying }) {
	const playSong = () => {
		setPlaying(song);
	};
	return (
		<div className="playlist-song" onClick={playSong}>
			<img src={song.photo} alt={song.songName} />
			<div className="song-info">
				<h3>{song.songName}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
	);
}

export default PlaylistSong;
