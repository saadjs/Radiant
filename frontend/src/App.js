import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginForm";
import SignupFormPage from "./components/SignupForm";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Song from "./components/Song";
import SongControls from "./components/SongControls";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);

	const [songs, setSongs] = useState([]);
	const [currentSong, setCurrentSong] = useState(songs[0]);

	useEffect(() => {
		dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
	}, [dispatch]);

	useEffect(() => {
		fetch("http://localhost:8000/songs")
			.then((data) => data.json())
			.then((songsData) => {
				setSongs(songsData);
				setCurrentSong(songsData[0]);
			});
	}, []);

	return (
		<>
			<Navigation isLoaded={isLoaded} />

			{isLoaded && (
				<Switch>
					<Route path="/signup" component={SignupFormPage} />

					<Route
						path="/songs"
						render={() => (
							<div>
								<Song />
								<SongControls />
							</div>
						)}
					/>

					<Route path="/" component={LoginFormPage} />

					<Route exact path="/" component={LoginFormPage} />
				</Switch>
			)}
		</>
	);
}

export default App;
