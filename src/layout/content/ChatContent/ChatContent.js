import { Avatar } from "components";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { invisible } from "configs/redux/Slice/ShowMessageSlice";
import "./chatContent.css";
function ChatContent() {
    const show = useSelector((state) => state.ShowMessage.value);
    const dispatch = useDispatch();
    const className_chat = show
        ? "chatContent__body chatContent__body-show"
        : "chatContent__body";
    return (
        <Col lg className={className_chat}>
            <Row>
                <Col lg={4} xs={8}>
                    <div className="p-3 p-lg-4 align-content-center flex-grow-0 d-inline-flex">
                        <div className="d-flex align-items-center">
                            <div
                                className="d-block d-lg-none me-3 ms-0 cur-pointer"
                                onClick={() => dispatch(invisible())}
                            >
                                <i className="bi bi-chevron-left"></i>
                            </div>
                            <div className="me-3 ms-0">
                                <Avatar width="3.5rem" status={true} />
                            </div>
                            <div className="flex-grow-1 overflow-hidden">
                                <h5 className="fz-16 mb-0 text-truncate">
                                    Doris Brown
                                </h5>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Col>
    );
}

export default ChatContent;
