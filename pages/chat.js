import React, {useState, useEffect} from "react";
import socketIOClient from "socket.io-client";
import styled from "styled-components";
import {useRouter} from 'next/router'
import {ChatStyle, GlobalStyle} from "../components/styled/GlobalStyle";


function Chat(props) {
    const router = useRouter();
    const [user, setUser] = useState({
        usersList: []
    });
    const [msg, setMsg] = useState("");
    const [recMsg, setRecMsg] = useState({
        listMsg: []
    });
    const [loggedUser, setLoggedUser] = useState(props.user);

    useEffect(() => {
        // list of connected users
        socket.on("users", data => {
            setUser({usersList: JSON.parse(data)})
            console.log("user list: " + JSON.parse(data));
        });
        // we get the messages
        socket.on("getMsg", data => {
            let listMessages = recMsg.listMsg;
            listMessages.push(JSON.parse(data));
            console.log("mesages: " + JSON.parse(data));
            setRecMsg({listMsg: listMessages});
        });
    }, []);

    const onChangeState = e => {
        e.preventDefault();
        console.log(e.target.value);
        setMsg(e.target.value);
    };

    // to send a message
    const sendMessage = () => {
        console.log("loggedUser: " + loggedUser);
            socket.emit("sendMsg", JSON.stringify({id: loggedUser.id, msg: msg}));
            setMsg("");

    };

    return (
        <div>
            <GlobalStyle/>
           <ChatStyle/>
            <div className="ui">
                <div className="left-menu">
                    <h3 >Usuarios</h3>
                    <menu className="list-friends">
                        {user.usersList.map((user,index) => {

                                    if(msg.userName===loggedUser.userName){
                                       return (<li className="friend-with-a-SVAGina" key={index} >
                                            <img width="50" height="50"
                                                 src="http://cs625730.vk.me/v625730358/1126a/qEjM1AnybRA.jpg"/>
                                            <div className="info">
                                                <div className="user">{user.userName}</div>
                                                <div className="status on"> online</div>
                                            </div>
                                        </li> )
                                    }else {
                                return   (     <li key={index}>
                                            <img width="50" height="50"
                                                 src="http://cs625730.vk.me/v625730358/1126a/qEjM1AnybRA.jpg"/>
                                            <div className="info">
                                                <div className="user">{user.userName}</div>
                                                <div className="status on"> online</div>
                                            </div>
                                        </li>)
                                    }

                            })
                        }
                    </menu>
                </div>
                <div className="chat">
                    <div className="top">
                        <div className="avatar">
                            <img width="50" height="50" src="http://cs625730.vk.me/v625730358/1126a/qEjM1AnybRA.jpg"/>
                        </div>
                        <div className="info">
                            <div className="name">{loggedUser.userName}</div>
                        </div>
                        <i className="fa fa-star"/>
                    </div>
                    <ul className="messages">
                        {
                            recMsg.listMsg.map((message,index)=>{
                                return(
                                    <li className="i">
                                        <div className="head">
                                            <span className="time">{message.time}</span>
                                            <span className="name">{message.userName}</span>
                                        </div>
                                        <div className="message">{message.msg}</div>
                                    </li>
                                );
                            })
                        }


                    </ul>
                    <div className="write-form">
                        <textarea placeholder="Escriba su mensaje" value={msg} onChange={onChangeState}  name="e" id="texxt" rows="2"/>
                        <i className="fa fa-picture-o"/>
                        <i className="fa fa-file-o"/>
                        <span className="send" onClick={sendMessage}>Send</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;