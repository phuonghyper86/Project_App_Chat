import React from "react";
import { useSelector } from "react-redux";
import useListFriend from "configs/customHook/useListFriend";
import useListGroup from "configs/customHook/useListGroup";
function AppProvider({ children }) {
    const currentUser = useSelector((state) => state.UserInfo.user);

    useListFriend(currentUser && currentUser.key);
    useListGroup(currentUser && currentUser.key);

    return <>{children}</>;
}

export default React.memo(AppProvider);
