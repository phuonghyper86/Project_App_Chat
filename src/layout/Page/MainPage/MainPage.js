import React from "react";
import { Body, TabBar } from "components";
import { ChatContent } from "layout/content/";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { auth } from "configs/firebase/config";
import { SetIsPending } from "configs/redux/Slice/UserSlice";
import LoadingPage from "layout/Page/LoadingPage/LoadingPage";
function MainPage() {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.UserInfo.user);
    const isLoading = useSelector((state) => state.UserInfo.pending);
    const navigate = useNavigate();

    const handleSignOut = async () => {
        dispatch(SetIsPending());
        auth.signOut().then(() => {});
    };
    if (isLoading === true) return <LoadingPage />;
    else if (currentUser !== null)
        return (
            <Body>
                <button onClick={() => handleSignOut()}>AL</button>

                <TabBar />
                <ChatContent />
            </Body>
        );
    else return <Navigate to="/Login" />;
}

export default MainPage;
