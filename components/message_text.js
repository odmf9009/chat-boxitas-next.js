import React from "react";
import styled from "styled-components";
import {Row,Message} from './chat_components'

const MessageText = (props) => {


    return (
        <Row>
            <Message >
                <p>{props.name}</p>
                <p>{props.message}</p>
                <time className="time">{props.time}</time>
            </Message>
        </Row>
    );
};
export default MessageText;