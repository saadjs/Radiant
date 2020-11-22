import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as sessionActions from "./../store/session";

function ProfileButton({ user }) {
	const dispatch = useDispatch();
	const history = useHistory();

	// const [showMenu, setShowMenu] = useState(false);

	// const openMenu = () => {
	// 	if (showMenu) return;
	// 	setShowMenu(true);
	// };

	// useEffect(() => {
	// 	if (!showMenu) return;

	// 	const closeMenu = () => {
	// 		setShowMenu(false);
	// 	};

	// 	document.addEventListener("click", closeMenu);

	// 	return () => document.removeEventListener("click", closeMenu);
	// }, [showMenu]);

	const logout = (e) => {
		e.preventDefault();
		dispatch(sessionActions.logout());
		history.push("/login");
	};

	return (
		<div>
			{/* <button onClick={openMenu}>User Profile</button> */}
			{/* {showMenu && (
				<ul className="profile-dropdown">
					<li>{user.username}</li>
					<li>{user.email}</li>
					<li>
						<button onClick={logout}>Log Out</button>
						</Link>
					</li>
				</ul>
			)} */}
			<p>
				Hello,{" "}
				{user.username.charAt(0).toUpperCase() + user.username.slice(1)}
			</p>
			<button onClick={logout}>Logout</button>
		</div>
	);
}

export default ProfileButton;
