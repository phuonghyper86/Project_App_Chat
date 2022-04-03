import { Avatar } from "components";
import React from "react";
import Message from "../Message/Message";
import "./listMessage.css";
function ListMessage() {
    return (
        <div className="ListMessage__parent">
            <div className="ListMessage__listChild fix_scroll">
                <Message />
            </div>
        </div>
    );
}

export default ListMessage;
