import React from "react";
import { ref, onValue } from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { GetAll } from "configs/redux/Slice/AllFriendSlice";
import { db } from "configs/firebase/config";
const useListFriend = (key) => {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.UserInfo.user);

    React.useEffect(() => {
        let dbRef = ref(db, `users/${key}/listFriend`);
        const unsubscribe = onValue(
            dbRef,
            (snapshot) => {
                console.log(snapshot.exists());
                if (snapshot.exists()) {
                    const list = [];
                    snapshot.forEach((childSnapshot) => {
                        list.push(childSnapshot.val().uid);
                    });
                    dispatch(GetAll(currentUser.uid));
                }
            },
            {
                onlyOnce: false,
            }
        );
        return unsubscribe;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, key]);
    return [true];
};

export default useListFriend;
