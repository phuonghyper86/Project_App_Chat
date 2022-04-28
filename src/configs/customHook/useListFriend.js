import React from "react";
import { ref, onValue } from "firebase/database";
import { useDispatch } from "react-redux";
import { add } from "configs/redux/Slice/AllFriendSlice";
import { db } from "configs/firebase/config";
const useListFriend = (key) => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        let dbRef = ref(db, `users/${key}/listFriend`);
        const unsubscribe = onValue(
            dbRef,
            (snapshot) => {
                if (snapshot.val()) {
                    const list = [];
                    snapshot.forEach((childSnapshot) => {
                        list.push(childSnapshot.val().uid);
                    });
                    dispatch(add(list));
                }
            },
            {
                onlyOnce: false,
            }
        );
        return unsubscribe;
    }, [dispatch, key]);
    return [true];
};

export default useListFriend;
