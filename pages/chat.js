import React, {useState, useEffect} from "react";
import socketIOClient from "socket.io-client";
import MessageText from "../components/message_text";
import styled from "styled-components";

const ENDPOINT = "http://127.0.0.1:4001";
const socket = socketIOClient(ENDPOINT);

function Chat(props) {

    const [user, setUser] = useState({
        usersList: null
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
            console.log("user list: "+JSON.parse(data));
        });
        // we get the messages
        socket.on("getMsg", data => {
            let listMessages = recMsg.listMsg;
            listMessages.push(JSON.parse(data));
            console.log("mesages: "+JSON.parse(data));
            setRecMsg({listMsg: listMessages});
        });
    }, []);

    const onChangeState = e => {
        console.log(e.target.value);
        setMsg(e.target.value);
    };

    // to send a message
    const sendMessage = () => {
        console.log("loggedUser"+ loggedUser);
        if (loggedUser.length === 0) {
            alert('Debe introducir su nombre para poder mandar mensajes');
        } else {
            socket.emit("sendMsg", JSON.stringify({id: loggedUser.id, msg: msg}));
            setMsg("");
        }

    };
    // get the logged user
    socket.on("connecteduser", data => {
        setLoggedUser(JSON.parse(data));
    });
    const Ol=styled.ol`
    list-style: none;
    background: none;
    margin: 0;
    padding: 0 0 50px 0;
    margin-top: 60px;
    margin-bottom: 10px;
    `;
    return (

            <div>

                <h3> Connected users : {user.usersList?.length} </h3>
                <table className="table">
                    <thead>
                    <tr>
                        <th> Nombre Usuario</th>
                        <th> Tiempo de Conexión</th>
                    </tr>
                    </thead>
                    <tbody>
                    {user.usersList?.map(user => {
                        return (<tr key={user.id}>
                            <td> {user.userName} </td>
                            <td> {user.connectionTime} </td>
                        </tr>)
                    })}
                    </tbody>
                </table>
                <h3> User : {loggedUser?.userName} </h3>
                <Ol>
                    {recMsg.listMsg?.map((msgInfo, index) => {
                        return (<MessageText name={msgInfo.userName} message={msgInfo.msg} time={msgInfo.time}/>);
                    })}
                </Ol>
                    <input style={{ bottom: "0px",
                        left: "0px",
                        right: "0px",
                        width: "100%",
                        height: "50px",
                        z_index: "99",
                        background: "#fafafa",
                        border: "none",
                        outline: "none",
                        padding_left: "55px",
                        padding_right: "55px",
                        color: "#666",
                        font_weight: "400"}}
                           value={msg}
                           onChange={onChangeState}/>
                    <div style={{
                        position: "fixed",
                        display: "block",
                        bottom: "8px",
                        left: "7px",
                        width: "34px",
                        height: "34px",
                        cursor: "pointer"
                    }} onClick={() => {
                        sendMessage()
                    }}> Send
                    </div>

            </div>

    );
}

export default Chat;