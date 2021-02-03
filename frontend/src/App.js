import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginForm";
import SignupFormPage from "./components/SignupForm";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Song from "./components/Song";
import SongControls from "./components/SongControls";
import "bootstrap/dist/css/bootstrap.min.css";
import Playlist from "./components/Playlist";
import InlineCSS from "./components/InlineCSS";
import { useSelector } from "react-redux";

function App() {
	// redux
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);

	// all different states for the songs and playing songs
	const [songs, setSongs] = useState();
	const [playing, setPlaying] = useState([]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [playlistStatus, setPlaylistStatus] = useState(true);
	const [time, setTime] = useState({
		current: 0,
		length: 0,
		playTimePercent: 0
	});

	// audio ref for the file
	const audioRef = useRef(null);

	const sessionUser = useSelector((state) => state.session.user);

	// current song playing time updater
	const timeUpdater = (e) => {
		const current = e.target.currentTime;
		const length = e.target.duration;
		const roundedCurrent = Math.round(current);
		const roundedLength = Math.round(length);
		const animation = Math.round((roundedCurrent / roundedLength) * 100);

		setTime({ ...time, current, length, playTimePercent: animation });
	};

	// when the song ends, go the next song,
	const onEndedHandler = async () => {
		let currentIdx = songs.findIndex((song) => song.id === playing.id);
		await setPlaying(songs[(currentIdx + 1) % songs.length]);

		// if the last was already playing, automatically play the next song
		if (isPlaying) audioRef.current.play();
	};

	// use effect for logged in user and also fetch all the songs from the database
	useEffect(() => {
		dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
		fetch("/api/songs")
			.then((data) => data.json())
			.then((songsData) => {
				setSongs(songsData);
				setPlaying(songsData[0]);
			})
			.catch((e) => console.error(e));
	}, [dispatch]);

	return (
		<div onDoubleClick={() => setPlaylistStatus(!playlistStatus)}>
			<div id="main-main">
				<Navigation
					isLoaded={isLoaded}
					playlistStatus={playlistStatus}
					setPlaylistStatus={setPlaylistStatus}
				/>
				{sessionUser && <InlineCSS playing={playing} />}
				<div
					className={`${playlistStatus ? "playlist-active" : ""}`}
					id="playlist-status"
				>
					{isLoaded && (
						<Switch>
							<Route path="/signup" component={SignupFormPage} />

							<Route
								path="/songs"
								render={() => (
									<div>
										<Song playing={playing} />

										<SongControls
											songs={songs}
											audioRef={audioRef}
											setIsPlaying={setIsPlaying}
											isPlaying={isPlaying}
											playing={playing}
											setTime={setTime}
											time={time}
											setPlaying={setPlaying}
											setSongs={setSongs}
										/>

										<Playlist
											playlistStatus={playlistStatus}
											songs={songs}
											setSongs={setSongs}
											setPlaying={setPlaying}
											audioRef={audioRef}
											isPlaying={isPlaying}
										/>
										<audio
											ref={audioRef}
											src={playing.mp3}
											onTimeUpdate={timeUpdater}
											onLoadedMetadata={timeUpdater}
											onEnded={onEndedHandler}
										></audio>
									</div>
								)}
							/>

							<Route path="/" component={LoginFormPage} />

							<Route exact path="/" component={LoginFormPage} />
						</Switch>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
