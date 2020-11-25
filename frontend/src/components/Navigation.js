import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as sessionActions from "./../store/session";

import { useSelector } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import "./Navigation.css";

function Navigation({ isLoaded, playlistStatus, setPlaylistStatus }) {
	const dispatch = useDispatch();

	// use history: on logout button press, take user to the login page
	const history = useHistory();

	const sessionUser = useSelector((state) => state.session.user);

	// logout handler
	const logout = (e) => {
		e.preventDefault();
		dispatch(sessionActions.logout());
		// back to login page
		history.push("/login");
	};

	return (
		<>
			<Navbar>
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
					</button>
				)}
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					{sessionUser && (
						<Navbar.Text
							className="hello-user-text"
							id="hello-user-text"
						>
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
