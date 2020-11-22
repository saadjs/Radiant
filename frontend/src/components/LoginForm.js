import React, { useState } from "react";
import * as sessionActions from "./../store/session";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import "./LoginForm.css";

function LoginFormPage() {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);
	const [credential, setCredential] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState([]);

	if (sessionUser) return <Redirect to="/" />;

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors([]);
		return dispatch(sessionActions.login({ credential, password })).catch(
			(res) => {
				if (res.data && res.data.errors) setErrors(res.data.errors);
			}
		);
	};

	// const onClick = () => history.push("/songs");

	return (
		<div id="main-holder">
			<img
				id="logo-img"
				src="https://www.freelogodesign.org/file/app/client/thumb/2b78cf08-0ba2-48a6-acc4-4eb188527d65_200x200.png?1606005029119"
				alt="logo"
			/>
			<h1 id="login-heading">Login</h1>
			<div id="login-error-msg-holder">
				{errors.map((error, idx) => (
					<p key={idx}>{error}</p>
				))}
			</div>
			<form id="login-form" onSubmit={handleSubmit}>
				<input
					type="text"
					// value={credential}
					onChange={(e) => setCredential(e.target.value)}
					required
					id="username-field"
					placeholder="Username"
				/>
				<input
					type="password"
					className="input"
					// value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
					id="password-field"
					placeholder="Password"
				/>
				<input
					type="submit"
					value="I DARE TO ENTER"
					id="login-form-submit"
					// onClick={onClick}
				/>
			</form>
			<NavLink id="sign-up-link" to="/signup">
				Ohh.. That Didn't work? Claim an account...
			</NavLink>
		</div>
	);
}

export default LoginFormPage;
