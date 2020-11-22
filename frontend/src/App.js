import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginForm";
import SignupFormPage from "./components/SignupForm";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Song from "./components/Song";
import SongControls from "./components/SongControls";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
				<Route
					render={({ location }) => (
						<TransitionGroup>
							<CSSTransition
								timeout={500}
								classNames="fade"
								key={location.key}
							>
								<Switch location={location}>
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
							</CSSTransition>
						</TransitionGroup>
					)}
				/>
			)}
		</>
	);
}

export default App;
