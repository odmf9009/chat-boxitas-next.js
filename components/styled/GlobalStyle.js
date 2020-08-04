import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*, *:before, *:after {
  box-sizing: border-box;
  list-style: none;
  
}

body {
  background: #C5DDEB;
  font: 14px/20px "Lato", Arial, sans-serif;
  padding: 40px 0;
  color: white;
}
`;

export const ChatStyle=createGlobalStyle`
$green: #86BB71;
$blue: #94C2ED;
$orange: #E38968;
$gray: #92959E;

.container {
  margin: 0 auto;
  width: 750px;
  background: #444753;
  border-radius: 5px;
}
.people-list {
  width:260px;
  float: left;
  .search {
    padding: 20px;
  }
  input {
    border-radius: 3px;
    border: none;
    padding: 14px;
    color: white;
    background: #6A6C75;
    width: 90%;
    font-size: 14px;
  }
  input::placeholder{
  color:white;
  }
  .fa-search {
    position: relative;
    left: -25px;
  }
  ul {
  list-style: none;
    padding: 20px;

    li {
      padding-bottom: 20px;
    }
  }
  
  img {
    float: left;
  }
  
  .about {
    float: left;
    margin-top: 8px;
    color: white;
  }
  
  .about {
    padding-left: 8px;
  }
  
  .status {
    color: #92959E;
  }
  
}

.chat {
  width: 490px;
  float:left;
  background: #F2F5F8;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  
  color: #434651;
  
  .chat-header {
    padding: 20px;
    border-bottom: 2px solid white;
    
    img {
      float: left;
    }
    
    .chat-about {
      float: left;
      padding-left: 10px;
      margin-top: 6px;
    }
    
    .chat-with {
      font-weight: bold;
      font-size: 16px;
    }
    
    .chat-num-messages {
      color: #92959E;
    }
    
    .fa-star {
      float: right;
      color: #D8DADF;
      font-size: 20px;
      margin-top: 12px;
    }
  }
  
  .chat-history {
    padding: 30px 30px 20px;
    border-bottom: 2px solid white;
    overflow-y: scroll;
    height: 300px;
    
    .message-data {
      margin-bottom: 15px;
    }
    
    .message-data-time {
      color: lighten(#92959E, 8%);
      padding-left: 6px;
    }
    
    .message {      
      color: white;
      padding: 18px 20px;
      line-height: 26px;
      font-size: 16px;
      border-radius: 7px;
      margin-bottom: 30px;
      width: 90%;
      position: relative;
      
      &:after {
        bottom: 100%;
        left: 7%;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-bottom-color: #86BB71;
        border-width: 10px;
        margin-left: -10px;
      }
    }
    
    .my-message {
      background: #86BB71;
    }
    
    .other-message {
      background: #94C2ED;
      
      &:after {
        border-bottom-color: #94C2ED;
        left: 93%;
      }
    }
    
  }
  
  .chat-message {
    padding: 30px;
    
    textarea {
      width: 100%;
      border: none;
      padding: 10px 20px;
      font: 14px/22px "Lato", Arial, sans-serif;
      margin-bottom: 10px;
      border-radius: 5px;
      resize: none;
      
    }
    
    .fa-file-o, .fa-file-image-o {
      font-size: 16px;
      color: gray;
      cursor: pointer;
      
    }
    
    button {
      float: right;
      color: #94C2ED;
      font-size: 16px;
      text-transform: uppercase;
      border: none;
      cursor: pointer;
      font-weight: bold;
      background: #F2F5F8;
      
      &:hover {
        color: darken(#94C2ED, 7%);
      }
    }
  }
}

.online, .offline, .me {
    margin-right: 3px;
    font-size: 10px;
  }
  
.online {
  color: #86BB71;
}
  
.offline {
  color: #E38968;
}

.me {
  color: #94C2ED;
}

.align-left {
  text-align: left;
}

.align-right {
  text-align: right;
}

.float-right {
  float: right;
}

.clearfix:after {
visibility: hidden;
display: block;
font-size: 0;
content: " ";
clear: both;
height: 0;
}


`;

export const LoginStyle=createGlobalStyle`

div.container{
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

#log-in * {
    box-sizing: border-box;
}

form{
margin: 60px auto;
    display: block;
    padding: 20px 30px 30px 30px;
    max-width: 480px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 0 1px rgba(0, 0, 0, 0.1);
}

h1{
 font-size: 36px;
    line-height: 1.5;
    font-weight: bold;
    margin: 10px 0;
    text-align: center;
}
p{
 text-align: center;
    margin-bottom: 30px;
}

div.containerInput{
 position: relative;
    display: block;
    margin: 10px 0;
    height: 54px;
    width: 100%;
    background: #e5e5e5;
    border: #f0f;
    border-radius: 3px;
}

input{
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
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 2px;
    border-width: 2px;
    border-style: inset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(195, 195, 195));
    border-image: initial;
}

button{

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

