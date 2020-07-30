import React from "react";
import styled from "styled-components";


const MessageText = (props) => {

    const lista=styled.li`
    padding: 0.5rem;
    overflow: hidden;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    `;
    const mensage=styled.div`
     order: 1;
    border-top-left-radius: 0px;
    box-shadow: -1px 2px 0px #D4D4D4;
    `;

    return (
        <lista >
            <div>{props.name}</div>
            <mensage >
                <p>{props.message}</p>
                <time>{props.time}</time>
            </mensage>
        </lista>
    );
};
export default MessageText;