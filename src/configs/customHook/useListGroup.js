import React from "react";
import { ref, onValue, query, orderByChild, equalTo } from "firebase/database";
import { useDispatch } from "react-redux";
import { add } from "configs/redux/Slice/AllGroupSlice";
import { db } from "configs/firebase/config";

const useListGroup = (key) => {
    const dispatch = useDispatch();
    React.useEffect(() => {
        let dbRef = query(
            ref(db, `users/${key}/listMessage`),
            orderByChild("type"),
            equalTo(2)
        );
        const unsubscribe = onValue(
            dbRef,
            (snapshot) => {
                if (snapshot.val()) {
                    const list = [];
                    snapshot.forEach((childSnapshot) => {
                        list.push(childSnapshot.val().messageId);
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

export default useListGroup;
