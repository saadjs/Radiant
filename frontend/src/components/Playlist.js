import React from "react";
import PlaylistSong from "./PlaylistSong";
import "./Playlist.css";

const Playlist = ({ songs }) => {
	return (
		<div className="playlist">
			<h2>Playlist</h2>
			<div className="playlist-song"></div>
			{songs && songs.map((song) => <PlaylistSong song={song} />)}
		</div>
	);
};

export default Playlist;
