import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as sessionActions from "./../store/session";

import { useSelector } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";

function Navigation({ isLoaded, playlistStatus, setPlaylistStatus }) {
	const dispatch = useDispatch();
	const history = useHistory();

	const sessionUser = useSelector((state) => state.session.user);

	const logout = (e) => {
		e.preventDefault();
		dispatch(sessionActions.logout());
		history.push("/login");
	};

	return (
		<>
			<Navbar>
				<Navbar.Brand
					href="/"
					className="navbar-home"
					id="navbar-home-btn"
				>
					Home
				</Navbar.Brand>
				<button
					id="playlist-nav-btn"
					onClick={() => setPlaylistStatus(!playlistStatus)}
				>
					<FontAwesomeIcon size="lg" icon={faCompactDisc} />
					Playlist
				</button>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					{sessionUser && (
						<Navbar.Text className="hello-user-text">
							{`Hello, ${
								sessionUser.username.charAt(0).toUpperCase() +
								sessionUser.username.slice(1)
							}!	`}
							<input
								className="logout-input-button"
								type="button"
								value="Logout"
								onClick={logout}
							/>
						</Navbar.Text>
					)}
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}

export default Navigation;
