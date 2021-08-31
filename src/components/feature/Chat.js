import React from "react";
import styled from "styled-components";
import Message from "./Message";
// Component home
function Chat() {
    return (
  
           <ChatContainer>
               This is chat component
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            </ChatContainer> 
   
    )
}

export default Chat
const ChatContainer = styled.div`
    flex: 0.7;
    margin-top: 60px;
    flex-grow: 1;
    overflow-y: scroll;
`;
