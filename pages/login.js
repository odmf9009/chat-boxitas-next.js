import React, {useState} from "react";
import styled from "styled-components";

function Login() {
    const [name, setName] = useState("");
    const [isLogged, setIsLogged] = useState(false);
    const [loggedUser, setLoggedUser] = useState(null);
    const onSummit = () => {
        if (nombre.length === 0) {
            alert("Debe introducir un nombre");
        } else {
            socket.emit("login", name);
            // get the logged user
            socket.on("connecteduser", data => {
                setLoggedUser(JSON.parse(data));
                setIsLogged(true);
            });
            setName("");
        }


    };
    const onChange = e => {
        setName(e.target.value)
    };

    const Container = styled.div`
    #log-in {
    font-family: helvetica;
    color: #333;
    padding: 0 15px;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    display: block;
    }
    .login-form {
    margin: 60px auto;
    display: block;
    padding: 20px 30px 30px 30px;
    max-width: 480px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 0 1px rgba(0, 0, 0, 0.1);
}
.login-heading {
    font-size: 36px;
    line-height: 1.5;
    font-weight: bold;
    margin: 10px 0;
    text-align: center;
}
#log-in * {
    box-sizing: border-box;
}
#log-in .login-copy {
    text-align: center;
    margin-bottom: 30px;
}
#log-in .login-form .field-container {
    position: relative;
    display: block;
    margin: 10px 0;
    height: 54px;
    width: 100%;
    background: #e5e5e5;
    border: #f0f;
    border-radius: 3px;
}
#log-in .login-form input {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 2;
    display: block;
    background: transparent;
    line-height: 54px;
    padding: 0 10px;
    font-size: 16px;
    border: none;
    color: #333;
    border-radius: 3px;
    border: 1px solid transparent;
    -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: textfield;
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    -webkit-rtl-ordering: logical;
    cursor: text;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 2px;
    border-width: 2px;
    border-style: inset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(195, 195, 195));
    border-image: initial;
}
#log-in .login-form button {
    display: block;
    margin: 30px 0;
    height: 54px;
    width: 100%;
    background: #33cc77;
    border: 1px solid #33cc77;
    border-top-color: transparent;
    border-radius: 3px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    text-shadow: -1px -1px rgba(0, 0, 0, 0.1);
    -webkit-transition: background 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: background 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
    
    `;

    return (
        <Container>
            <div id="log-in">
                <form className="login-form" onSubmit={onSummit} onChange={onChange}>
                    <h1 className="login-heading">Sala de Chat Boxitas</h1>
                    <p className="login-copy">Introduzca su nombre para unirte a la comunidad</p>
                    <div className="field-container -username">
                       <input type="text" value={name} placeholder="Nombre"/>
                    </div>
                    <button className="log-in-button" type="submit">Entrar</button>
                </form>
            </div>
        </Container>


    );
}

export default Login;