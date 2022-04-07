import React from "react";
import { uiConfig, auth } from "configs/firebase/config";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SetIsPending } from "configs/redux/Slice/UserSlice";
import LoadingPage from "layout/Page/LoadingPage/LoadingPage";

function LoginPage() {
    const currentUser = useSelector((state) => state.UserInfo.user);
    const isLoading = useSelector((state) => state.UserInfo.pending);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    if (isLoading === true) return <LoadingPage />;
    else if (currentUser === null)
        return (
            <div>
                <StyledFirebaseAuth
                    onClick={() => dispatch(SetIsPending())}
                    uiConfig={uiConfig}
                    firebaseAuth={auth}
                />
            </div>
        );
    else return <Navigate to="/MainPage" />;
}

export default LoginPage;
