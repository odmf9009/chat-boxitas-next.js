import styled from "styled-components";




export const Row=styled.li`
    padding: 0.5rem;
    overflow: hidden;
    background: none;
    display: flex;
    justify-content: flex;
    align-items: flex;
    p{
    font-size: 0.8rem;
    margin: 0 0 0.2rem 0;
    color: #777;

    }
    .time{
    font-size: 0.7rem;
    color: #ccc;
    margin-top: 3px;
    float: right;
    cursor: default;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}
    
    `;
export const Message=styled.div`
     order: 1;
    border-top-left-radius: 0px;
    box-shadow: -1px 2px 0px #D4D4D4;
    background: white;
    min-width: 50px;
    padding: 10px;
    border-radius: 2px;
    `;

export const BodyChat=styled.div`
  background: #e5e5e5;
  margin: 0px auto;
  height: 100%;
`;
export const InputChat = styled.input`
   position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    width: 100%;
    height: 50px;
    z-index: 99;
    background: #fafafa;
    border: none;
    outline: none;
    padding-left: 55px;
    padding-right: 55px;
    color: #666;
    font-weight: 400;
    `;

export const BotonChat = styled.div`
   position: fixed;
    display: block;
    bottom: 8px;
    left: 7px;
    width: 34px;
    height: 34px;
    background-image: url("http://localhost:3000/images/icon_send.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 100;
    cursor: pointer;
    `;

