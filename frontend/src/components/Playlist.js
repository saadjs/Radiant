import React from "react";
import PlaylistSong from "./PlaylistSong";
import "./Playlist.css";

const Playlist = ({ songs, setPlaying, audioRef, isPlaying, setSongs }) => {
	return (
		<div className="playlist">
			<h2>Playlist</h2>
			<div className="playlist-songs">
				{songs &&
					songs.map((song) => (
						<PlaylistSong
							key={song.id}
							setPlaying={setPlaying}
							songs={songs}
							song={song}
							audioRef={audioRef}
							isPlaying={isPlaying}
							id={song.id}
							setSongs={setSongs}
						/>
					))}
			</div>
		</div>
	);
};

export default Playlist;
