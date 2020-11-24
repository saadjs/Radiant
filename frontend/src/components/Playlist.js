import React from "react";
import PlaylistSong from "./PlaylistSong";
import "./Playlist.css";

const Playlist = ({ songs, isPlaying }) => {
	return (
		<div className="playlist">
			<h2>Playlist</h2>
			<div className="playlist-songs">
				{songs &&
					songs.map((song) => (
						<PlaylistSong isPlaying={isPlaying} song={song} />
					))}
			</div>
		</div>
	);
};

export default Playlist;
