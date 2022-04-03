import React from "react";
import { Avatar } from "components";
import "./message.css";
function Message() {
    return (
        <div className="d-flex">
            <div className="d-flex flex-column-reverse">
                <Avatar width="2rem" />
            </div>
            <div className="Message__Content-Left">
                <div className="nodeChildMessage">
                    <div className="childMessage">
                        Hãy Nhập tin nhắn vào đi bạn ơi
                    </div>

                    <div className="messageAction">
                        <i className="bi bi-three-dots-vertical"></i>
                    </div>
                </div>
                <div className="nodeChildMessage">
                    <div className="childMessage">a</div>
                    <div className="messageAction">
                        <i className="bi bi-three-dots-vertical"></i>
                    </div>
                </div>
                <div className="nodeChildMessage">
                    <div className="childMessage">a</div>
                    <div className="messageAction">
                        <i className="bi bi-three-dots-vertical"></i>
                    </div>
                </div>
                <div className="userName">tran Nhat Quang</div>
            </div>
        </div>
    );
}

export default Message;
