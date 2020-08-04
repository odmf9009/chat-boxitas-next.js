import React, {useState, useEffect} from "react";
import socketIOClient from "socket.io-client";
import {ChatStyle, GlobalStyle} from "../components/styled/GlobalStyle";


const ENDPOINT = "http://127.0.0.1:4001";
const socket = socketIOClient(ENDPOINT);

function Chat(props) {
    console.log("chat lista pasada por props: "+props.list);
    const [user, setUser] = useState({
        usersList: JSON.parse(props.list)
    });
    const [msg, setMsg] = useState("");
    const [recMsg, setRecMsg] = useState({
        listMsg: []
    });
    const [loggedUser, setLoggedUser] = useState(props.user);
    const [search,setSearch] =useState("");
    useEffect(() => {
        // list of connected users
        console.log("useEffect");
        socket.on("users", data => {
            setUser({usersList: JSON.parse(data)})
            console.log("user list: " + user.usersList);
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
    const sendMessage = e => {
        if(e.keyCode===13&& !e.shiftKey){
            console.log("loggedUser: " + loggedUser);
            socket.emit("sendMsg", JSON.stringify({id: loggedUser.id, msg: msg}));
            setMsg("");
        }


    };

    const onChageBuscar=e=>{
        setSearch(e.target.value);
    };
    return (
        <div>
            <GlobalStyle/>
            <ChatStyle/>
            <div className="container clearfix">
                <div className="people-list" id="people-list">
                    <div className="search">
                        <input type="text" value={search} onChange={onChageBuscar} placeholder="buscar"/>
                    </div>
                    <ul className="list">
                        {user.usersList.filter(user => user.userName.includes(search)).map((user,index)=>{
                          return ( <li key={index} className="clearfix">

                                <div className="about">
                                    <div className="name">{user.userName}</div>
                                </div>
                            </li>)
                        })}
                    </ul>
                </div>
                <div className="chat">
                    <div className="chat-header clearfix">
                        <div className="chat-about">
                            <div className="chat-with">{loggedUser.userName}</div>
                        </div>

                    </div>
                    <div className="chat-history">
                        <ul>
                            {recMsg.listMsg.map((msg,index)=>{
                                if(msg.userName===loggedUser.userName){
                                    return (
                                        <li className="clearfix">
                                            <div className="message-data align-right">
                                                <span className="message-data-time">{msg.time}</span> &nbsp; &nbsp;
                                                <span className="message-data-name">{msg.userName}</span>

                                            </div>
                                            <div className="message other-message float-right">
                                                {msg.msg}
                                            </div>
                                        </li>
                                    )
                                }
                                return ( <li>
                                    <div className="message-data">
                                        <span className="message-data-name">{msg.userName}</span>
                                        <span className="message-data-time">{msg.time}</span>
                                    </div>
                                    <div className="message my-message">
                                        {msg.msg}
                                    </div>
                                </li>)
                            })}
                        </ul>

                    </div>
                    <div className="chat-message clearfix">
                        <textarea name="message-to-send" value={msg}  onKeyUp={sendMessage} onChange={onChangeState} id="message-to-send" placeholder="Type your message" rows="3"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;