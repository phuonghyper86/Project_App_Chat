import React from "react";
import { Body, TabBar } from "components";
import { ChatContent } from "layout/content/";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function MainPage() {
    const currentUser = useSelector((state) => state.UserInfo.user);
    const pending = useSelector((state) => state.UserInfo.pending);
    console.log(pending);
    const dispatch = useNavigate();
    console.log(currentUser);
    return (
        <Body>
            <button onClick={() => dispatch("/Login")}>AL</button>

            <TabBar />
            <ChatContent />
        </Body>
    );
}

export default MainPage;
