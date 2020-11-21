import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginForm";
import SignupFormPage from "./components/SignupForm";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Song from "./components/Song";
import SongControls from "./components/SongControls";

function App() {
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
	}, [dispatch]);
	return (
		<>
			<Navigation isLoaded={isLoaded} />
			{isLoaded && (
				<Switch>
					<Route path="/signup">
						<SignupFormPage />
					</Route>

					<Route path="/songs">
						<Song />
						<SongControls />
					</Route>
					<Route path="/login">
						<LoginFormPage />
					</Route>
					<Route path="*">
						<LoginFormPage />
					</Route>
				</Switch>
			)}
		</>
	);
}

export default App;
