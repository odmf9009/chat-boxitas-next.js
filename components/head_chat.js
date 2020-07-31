
import styled from "styled-components";
function HeadChat(props) {

const Head=styled.div`
position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    width: 100%;
    height: 50px;
    background: rgba(82,179,217,0.9);
    z-index: 100;
`;

const Name=styled.div`
position: absolute;
    top: 3px;
    left: 110px;
    font-family: 'Lato';
    font-size: 25px;
    font-weight: 300;
    color: rgba(255,255,255,0.98);
    cursor: default;
`

return (
    <Head>
        <Name>{props.name}</Name>
    </Head>
);
}
export default HeadChat;