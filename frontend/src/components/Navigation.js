import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as sessionActions from "./../store/session";

import { useSelector } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import "./Navigation.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGuitar } from "@fortawesome/free-solid-svg-icons";

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
				{/* <Navbar.Brand
					href="/"
					className="navbar-home"
					id="navbar-home-btn"
				>
					Home
				</Navbar.Brand> */}
				{sessionUser && (
					<button
						id="playlist-nav-btn"
						onClick={() => setPlaylistStatus(!playlistStatus)}
					>
						<img
							id="logo-img"
							src="https://www.freelogodesign.org/file/app/client/thumb/2b78cf08-0ba2-48a6-acc4-4eb188527d65_200x200.png?1606005029119"
							alt="logo"
						/>
						{/* <FontAwesomeIcon size="3x" icon={faGuitar} /> */}
						{/* <h3 className="playlist-heading-h3">Playlist</h3> */}
					</button>
				)}
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
