import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "configs/firebase/config";
import { LogIn, LogOut } from "configs/redux/Slice/UserSlice";
import { useDispatch } from "react-redux";
function AuthProvider({ children }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useLayoutEffect(() => {
        const unsubscribed = auth.onAuthStateChanged((user) => {
            console.log(user);
            if (user !== null) {
                console.log(user);
                const { displayName, email, uid, photoURL } = user;
                dispatch(LogIn({ displayName, email, uid, photoURL }));
            } else {
                dispatch(LogOut());
                navigate("Login");
            }
        });
        return () => {
            unsubscribed();
        };
    }, [dispatch, navigate]);
    return <>{children}</>;
}

export default AuthProvider;
