import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import "./Song.css";

function PlaylistSong({ song }) {
	return (
		<div className="playlist-song">
			<img src={song.photo} alt={song.songName} />
			<div className="song-info">
				<h3>{song.songName}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
	);
}

export default PlaylistSong;
