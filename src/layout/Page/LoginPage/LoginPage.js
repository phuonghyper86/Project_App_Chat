import React from "react";
import { uiConfig, auth } from "configs/firebase/config";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const currentUser = useSelector((state) => state.UserInfo.user);
    console.log(currentUser);
    const navigate = useNavigate();
    if (currentUser === null)
        return (
            <div>
                <button onClick={() => navigate("/MainPage")}></button>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
            </div>
        );
    else return <Navigate to="/MainPage" />;
}

export default LoginPage;
