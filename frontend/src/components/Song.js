import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import "./Song.css";

function Song() {
	const sessionUser = useSelector((state) => state.session.user);

	if (!sessionUser) return <Redirect to="/login" />;

	return (
		<div className="file-container">
			<h1>Photo</h1>
			<h1>Song Name</h1>
			<h1>Artist</h1>
		</div>
	);
}

export default Song;
