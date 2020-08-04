import React, {useState} from "react";
import styled from "styled-components";
import socketIOClient from "socket.io-client";
import { useRouter } from 'next/router'
import Chat from "./chat";
import {GlobalStyle, LoginStyle} from "../components/styled/GlobalStyle";

const ENDPOINT = "http://127.0.0.1:4001";
const socket = socketIOClient(ENDPOINT);

function App() {
    const [name, setName] = useState("");
    const [isLogged, setIsLogged] = useState(false);
    const [loggedUser, setLoggedUser] = useState(null);
    const [msg, setMsg] = useState("");
    const onSummit = e => {
        e.preventDefault();
        console.log("Nombre: "+name)
        if (name.length === 0) {
            alert("Debe introducir un nombre");
        } else {
            socket.emit("login", name);
            // get the logged user
            socket.on("connecteduser", data => {
                console.log(JSON.parse(data));
                setLoggedUser(JSON.parse(data));
                setIsLogged(true);
            });
        }


    };

    const onChange = e => {
        setName(e.target.value)
    };


    const onChangeStateLogin = e => {
        setUser(e.target.value);
    };

    return (

        <div>
            <GlobalStyle/>
            <LoginStyle/>
            <div className="container" id="log-in">
                <form className="login-form" onSubmit={onSummit} >
                    <h1 className="login-heading">Sala de Chat Boxitas</h1>
                    <p className="login-copy">Introduzca su nombre para unirte a la comunidad</p>
                    <div  className="containerInput field-container -username">
                        <input type="text" value={name} onChange={onChange} placeholder="Nombre"/>
                    </div>
                    <button className="log-in-button" type="submit">Entrar</button>
                </form>
            </div>
        </div>


    );
}

export default App;