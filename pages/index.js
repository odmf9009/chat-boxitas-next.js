import React, {useState, useEffect} from "react";
import socketIOClient from "socket.io-client";
import GlobalStyle from "../components/styled/GlobalStyle";
import Login from "./login";
const ENDPOINT = "http://127.0.0.1:4001";
const socket = socketIOClient(ENDPOINT);

function App() {

    const [isLogged,setIsLogged]=useState(false);
    const [loggedUser, setLoggedUser] = useState(null);


    // to send a message


    const onChangeState = e => {
        setUser(e.target.value);
    };

    return (

            <div>
                <GlobalStyle/>
               <Login/>
            </div>


    );
}

export default App;