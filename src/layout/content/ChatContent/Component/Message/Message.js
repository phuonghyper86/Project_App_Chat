import React, { useEffect, useState } from "react";
import { Avatar } from "components";
import { Dropdown } from "react-bootstrap";
import "./message.css";
import { findUserByUid } from "configs/firebase/ServiceFirebase/ServiceFind";
function Message(props) {
    const { value, currentUid } = props;
    const [user, setUser] = useState(null);
    useEffect(() => {
        let umount = true;
        const handleUserInfo = async () => {
            const result = await findUserByUid(value.sendUid);
            if (umount && result) {
                setUser(result);
            }
        };
        handleUserInfo();
        return () => {
            umount = false;
        };
    }, [value.sendUid]);

    if (value.sendUid !== currentUid && user) {
        return (
            <div className="Message__Parent">
                <div className="d-flex flex-column-reverse">
                    <Avatar width="2rem" url={user.photoURL} />
                </div>
                <div className="Message__Content-Left">
                    <div className="nodeChildMessage">
                        <div className="childMessage">
                            <span>
                                kubr _ 1 năm trước (đã chỉnh sửa) “No matter how
                                many people you may lose you have no choice but
                                to go on living. No matter how devastating the
                                blows may be.”
                            </span>
                            <div className="childMessage-hour">12:00 AM</div>
                        </div>
                        <div className="messageAction">
                            <Dropdown>
                                <Dropdown.Toggle
                                    as="div"
                                    bsPrefix="listContact__dropdownToggle"
                                >
                                    <i className="bi bi-three-dots-vertical"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu
                                    align="start"
                                    className="text-muted messageAction__dropdown"
                                >
                                    <Dropdown.Item className="messageAction__dropdown-item">
                                        <i className="bi bi-share"></i>
                                    </Dropdown.Item>
                                    <Dropdown.Item className="messageAction__dropdown-item">
                                        <i className="bi bi-trash3-fill"></i>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="userName">tran Nhat Quang</div>
                </div>
            </div>
        );
    } else if (user) {
        return (
            <div className="Message__Parent flex-row-reverse">
                <div className="d-flex flex-column-reverse">
                    <Avatar width="2rem" />
                </div>
                <div className="Message__Content-Right">
                    {value.val.map((tmp, index) => (
                        <div className="nodeChildMessage-Right" key={index}>
                            <div className="childMessage">
                                <span>{tmp.val.title}</span>
                                <div className="d-flex">
                                    <div className="childMessage-hour">
                                        12:00 AM
                                    </div>
                                </div>
                                {tmp.showSend === 1 ? (
                                    <div className="showSend">Sent</div>
                                ) : tmp.showSend === 2 ? (
                                    (<div className="showSend">Sent</div>)(
                                        <div className="showSend">Seen</div>
                                    )
                                ) : (
                                    <></>
                                )}
                            </div>
                            <div className="messageAction">
                                <Dropdown>
                                    <Dropdown.Toggle
                                        as="div"
                                        bsPrefix="listContact__dropdownToggle"
                                    >
                                        <i className="bi bi-three-dots-vertical"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu
                                        align="end"
                                        className="text-muted messageAction__dropdown"
                                    >
                                        <Dropdown.Item className="messageAction__dropdown-item">
                                            <i className="bi bi-share"></i>
                                        </Dropdown.Item>
                                        <Dropdown.Item className="messageAction__dropdown-item">
                                            <i className="bi bi-trash3-fill"></i>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    ))}

                    <div className="userName">{user.displayName}</div>
                </div>
            </div>
        );
    } else return <></>;
    // var list = [];
    // const WIDTH = 100 / Math.ceil(Math.sqrt(list.length));
    // const { showSend } = props;
    // if (1 == 1) {
    // } else if (1 == 5)
    //     return (
    //         <div className="Message__Parent">
    //             <div className="d-flex flex-column-reverse">
    //                 <Avatar width="2rem" />
    //             </div>
    //             <div className="Message__Content-Left">
    //                 <div className="nodeChildMessage">
    //                     <div className="childMessage">
    //                         <div className="childMessage__listImg">
    //                             {list.map((value, index) => (
    //                                 <img
    //                                     key={index}
    //                                     src="https://w0.peakpx.com/wallpaper/24/571/HD-wallpaper-scared-girl-anime-anim.jpg"
    //                                     alt=""
    //                                     width={`${WIDTH}%`}
    //                                     height={`${WIDTH}%`}
    //                                 />
    //                             ))}
    //                         </div>
    //                         <div className="childMessage-hour">12:00 AM</div>
    //                     </div>
    //                     <div className="messageAction">
    //                         <Dropdown>
    //                             <Dropdown.Toggle
    //                                 as="div"
    //                                 bsPrefix="listContact__dropdownToggle"
    //                             >
    //                                 <i className="bi bi-three-dots-vertical"></i>
    //                             </Dropdown.Toggle>
    //                             <Dropdown.Menu
    //                                 align="start"
    //                                 className="text-muted messageAction__dropdown"
    //                             >
    //                                 <Dropdown.Item className="messageAction__dropdown-item">
    //                                     <i className="bi bi-share"></i>
    //                                 </Dropdown.Item>
    //                                 <Dropdown.Item className="messageAction__dropdown-item">
    //                                     <i className="bi bi-trash3-fill"></i>
    //                                 </Dropdown.Item>
    //                             </Dropdown.Menu>
    //                         </Dropdown>
    //                     </div>
    //                 </div>
    //                 <div className="userName">tran Nhat Quang</div>
    //             </div>
    //         </div>
    //     );
}

export default Message;
