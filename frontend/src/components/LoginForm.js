import React, { useState } from "react";
import * as sessionActions from "./../store/session";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import "./LoginForm.css";

function LoginFormPage() {
	// redux dispatch
	const dispatch = useDispatch();

	// session user
	const sessionUser = useSelector((state) => state.session.user);
	const [credential, setCredential] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState([]);

	// if use had already logged in, redirect to /songs else redirect to login page
	if (sessionUser) return <Redirect to="/songs" />;

	// user login submit handler
	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors([]);
		return dispatch(sessionActions.login({ credential, password })).catch(
			(res) => {
				if (res.data && res.data.errors) setErrors(res.data.errors);
			}
		);
	};

	// demo user login handler
	const demoLoginHandler = (e) => {
		dispatch(
			sessionActions.login({
				credential: "Demo-lition",
				password: "password"
			})
		);
	};

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
					onChange={(e) => setCredential(e.target.value)}
					required
					id="username-field"
					placeholder="Username"
				/>
				<input
					type="password"
					autoComplete="on"
					onChange={(e) => setPassword(e.target.value)}
					required
					id="password-field"
					placeholder="Password"
				/>
				<input
					type="submit"
					value="I DARE TO ENTER"
					id="login-form-submit"
				/>
				<input
					id="login-form-submit-demo"
					type="button"
					value="Login as Demo"
					onClick={demoLoginHandler}
				/>
			</form>
			<NavLink id="sign-up-link" to="/signup">
				Ohh.. That Didn't work? Claim an account...
			</NavLink>
		</div>
	);
}

export default LoginFormPage;
