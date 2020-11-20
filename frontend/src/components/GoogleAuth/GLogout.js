import React from "react";
import { GoogleLogout } from "react-google-login";
import { clientId } from "./ClientId";

function GLogout() {
	return (
		<>
			<GoogleLogout
				clientId={clientId}
				buttonText="Logout"
				onLogoutSuccess={() => window.alert("Logout successfull!")}
			/>
		</>
	);
}

export default GLogout;
