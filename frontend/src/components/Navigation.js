import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as sessionActions from "./../store/session";

import { useSelector } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import "./Navigation.css";

function Navigation({ isLoaded }) {
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
				<Navbar.Brand href="/" className="navbar-home">
					Home
				</Navbar.Brand>
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
