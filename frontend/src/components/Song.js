import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import "./Song.css";

function Song({ playing }) {
	// check if user has logged in
	const sessionUser = useSelector((state) => state.session.user);
	// if not logged in, redirect to the login page
	if (!sessionUser) return <Redirect to="/login" />;
	return (
		<div className="file-container">
			<img src={playing.photo} alt={playing.songName} />
			<h2 style={{ color: `${playing.art && playing.art[0]}` }}>
				{playing.songName}
			</h2>
			<h3 style={{ color: `${playing.art && playing.art[0]}` }}>
				{playing.artist}
			</h3>
		</div>
	);
}

export default Song;
