import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 *{
// transition: all .1s;
box-sizing: border-box;
margin: 0;
padding: 0;
}
html{
height: 100vh;
}
body{
&:extend(html);
overflow: hidden;
font-family: 'Open Sans', sans-serif;
background-image: linear-gradient(to bottom left,rgba(255, 255, 255, .6),transparent 60%,rgba(0, 0, 0, .6)),linear-gradient(to top left, #a0d3e4, #97d1e7);
}
`;

export const ChatStyle=createGlobalStyle`
.ui{
margin: 10px auto;
width: 745px ;
height: 555px ;
background-color: #fff;
border-radius: 3px;
box-shadow: 0 0 25px darken(#61b2d0,10);
flex-direction: row;
display: flex;
overflow: hidden;

.search input{
outline: none;
border: none;
background: none;
}
.search{
position: relative;

input[type=submit]{
font-family: 'FontAwesome';
position: absolute;
right: 25px;
top: 27px;
color: white;
}
input[type=search]{
background-color: #696c75;
border-radius: 3px;
padding: 10px;//
width: 90%;
box-sizing: border-box;
margin: 1.5;
color: #fff;
}
}
.left-menu{
box-sizing: content-box;
padding-right: 1%;
height: 100%;
width: 35%;
background: #434753;
}
.chat{
width: 100%;
height: 100%;
background: #f1f5f8;

.info{
display: inline-flex;
flex-direction: column;
vertical-align: 40px;
width: ~'calc(100% - 65px - 50px)';

.name{
font-weight: 600;
color: #434753;
height: 50%;
}
.count{
color: #6d738d;
}
}
.fa{
color: #d6d9de;
vertical-align: 25px;
}
}

.avatar>img,
.list-friends img{
border-radius: 50%;
border: 3px solid #696c75;
}
.list-friends{
list-style: none;
font-size: 13px;
// overflow-y: scroll;
height: 88%;
& img{
margin: 5px;
}
&>li{
display: flex;
margin: 0 0 10px 10px;
     user-select:none;        
}
.info{
flex: 1;
}
.user{
color: #fff;
margin-top: 12px;
}
.status{
position: relative;
margin-left: 14px;
color: #a8adb3;
}

.off:after,
.on:after{
content: '';
left: -12px;
top: 8px;
position: absolute;
height: 7px;
width: 7px;
border-radius: 50%;
}
.off:after{
background: #fd8064;
}
.on:after{
background: #62bf6e;
}
}
.top{
height: 70px;
}
.messages{
height: 60%;
list-style: none;
border: 2px solid #fff;
border-left: none;
border-right: none;

li{
margin: 10px;
transition: all .5s;
&:after{
content: '';
clear: both;
display: block;
}
.head{
font-size: 13px;
}
.name{
font-weight: 600;
position: relative;

&:after{
content: '';
position: absolute;
height: 8px;
width: 8px;
border-radius: 50%;
top: 6px;
}}
.time{
color: #b7bccf;
}
.message{
margin-top: 20px;
color: #fff;
font-size: 15px;
border-radius: 3px;
padding: 20px;
line-height: 25px;
max-width: 500px;
word-wrap: break-word;
position: relative;
&:before{
content: '';
position: absolute;
width: 0px;
height: 0px;
top: -12px;
border-bottom: 12px solid #62bf6e;
border-left: 10px solid transparent;
border-right: 10px solid transparent;
}
}
}

li.friend-with-a-SVAGina{
.name{
margin-left: 20px;

&:after{
background-color: #62bf6e;
left: -20px;
top: 6px;
}
}
.message{
tbackground-color: #62bf6e;
float: left;

&:before{
left: 16px;
border-bottom-color: #62bf6e;
}
}
}
li.i{
.head{
text-align: right;
}
.name{
margin-right: 20px;

&:after{
background-color: #7bc4ef;
right: -20px;
top: 6px;
}
}
.message{
background-color: #7bc4ef;
float: right;


&:before{
right: 16px;
border-bottom-color: #7bc4ef;
}
}
}
}
.write-form{
height: 150px;
textarea{
     height:75px;
margin: 17px 5%;
width: 90%;
outline: none;
padding: 15px;
border: none;
border-radius: 3px;
resize: none;
&:before{
content: '';
clear: both;
}
}
}
.avatar>img{
border-color: #62bf6e;
margin: 10px;
margin-right: 5px;

}
.avatar{
display: inline-block;
}
.send{
color: #7ac5ef;
text-transform: uppercase;
font-weight: 700;
float: right;
margin-right: 5%;
cursor: pointer;

  user-select:none;
}
i.fa-file-o{
margin-left: 15px;
}
i.fa-picture-o{
margin-left: 5%;
}
h3{
text-align: center;
    margin-top: 5px;
    color: white;
    width: 100%;
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

