import React, {useState, useEffect} from "react";
import socketIOClient from "socket.io-client";
import Chat from "./chat";
import styled from "styled-components";
import GlobalStyle from "../components/styled/GlobalStyle";
const ENDPOINT = "http://127.0.0.1:4001";
const socket = socketIOClient(ENDPOINT);

function App() {

    const [user, setUser] = useState("");
    const [isLogged,setIsLogged]=useState(false);
    const [loggedUser, setLoggedUser] = useState(null);


    // to send a message
    const login = () => {
        // subscribe a new user
        if(user.length===0){
            alert("Debe introducir su nombre");
        }else{
            socket.emit("login",user);
            // get the logged user
            socket.on("connecteduser", data => {
                setLoggedUser(JSON.parse(data));
                setIsLogged(true);
            });
        }
    };

    const onChangeState = e => {
        setUser(e.target.value);
    };

    return (

            <div>
                <GlobalStyle/>
                {isLogged===false?<div><input style={{width: "300px", display: "inline"}} id="inputmsg"
                       value={user}
                       onChange={onChangeState}/>
                <button   onClick={() => {
                    login()
                }}> Entrar
                </button></div>:null}
                {isLogged===true ?<div style={{ background:"#e5e5e5",width: "100%"}}><Chat user={loggedUser}/></div>:null}
            </div>


    );
}

export default App;