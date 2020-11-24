import React from "react";
import PlaylistSong from "./PlaylistSong";
import "./Playlist.css";

const Playlist = ({
	songs,
	setPlaying,
	audioRef,
	isPlaying,
	setSongs,
	playlistStatus
}) => {
	return (
		<div className={`playlist ${playlistStatus ? "active-playlist" : ""}`}>
			<h2>Tracks</h2>
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
