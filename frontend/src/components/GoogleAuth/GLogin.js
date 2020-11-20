import React from "react";
import { GoogleLogin } from "react-google-login";
import { clientId } from "./ClientId";

function GLogin() {
	return (
		<>
			<GoogleLogin
				clientId={clientId}
				buttonText="Login with google"
				onSuccess={(response) =>
					console.log(
						"This is the response Obj from Google: ",
						response
					)
				}
				onFailure={(response) =>
					console.log("Login failed: ", response)
				}
				cookiePolicy={"single_host_origin"}
				isSignedIn={true}
			/>
		</>
	);
}

export default GLogin;
