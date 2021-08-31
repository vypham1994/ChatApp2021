import React from 'react'
import styled from "styled-components";
function Message() {
    return (
        <MessageContainer>
          <img src = "https://www.jea.com/cdn/images/avatar/avatar-alt.svg"/>
          <MessageInfo>
          {""}
          <h4>
              Username
              <span>24/12/2012</span>
          </h4>  
          <p>Message hello</p>
          </MessageInfo>
        </MessageContainer>
    )
}

export default Message;
const MessageInfo = styled.div`
    padding-left: 10px;
    > h4 > span {
        color: gray;
        font-weight: 400;
        margin-left: 5px;
        font-size: 12px;
    }
`;
const MessageContainer = styled.div `
    display: flex;
    align-items: center;
    padding: 20px;
    > img {
        height: 50px;
        border-radius: 8px;
    }
`;
