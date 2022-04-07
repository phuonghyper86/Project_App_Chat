import React from "react";
import { auth } from "configs/firebase/config";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
    signInWithRedirect,
    GoogleAuthProvider,
    FacebookAuthProvider,
} from "firebase/auth";

const GoogleProvider = new GoogleAuthProvider();
const FacebookProvider = new FacebookAuthProvider();

function LoginPage() {
    const currentUser = useSelector((state) => state.UserInfo.user);
    console.log("Login");
    const handleSignIn = async (provider) => {
        signInWithRedirect(auth, provider);
    };

    if (currentUser === null)
        return (
            <div>
                <button onClick={() => handleSignIn(GoogleProvider)}>
                    Google
                </button>
                <button onClick={() => handleSignIn(FacebookProvider)}>
                    Facebook
                </button>
            </div>
        );
    else return <Navigate to="/MainPage" />;
}

export default React.memo(LoginPage);
