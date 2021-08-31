import React from 'react';
import styled from "styled-components";

function SidebarOption({Icon, title, addChannelOption}) {
    return( 
    <SidebarOptionContainer>
        {Icon && <Icon fontSize="small" style={{padding:10}}/>}
        {title}
    {/* <SidebarOptionChannel>
        <span># Hello</span>
    </SidebarOptionChannel> */}
    </SidebarOptionContainer>
    );
   }

export default SidebarOption;
const SidebarOptionChannel = styled.div`
    font-weight: 300;
`;
const SidebarOptionContainer = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    padding-left: 2px;
    cursor: pointer;
    :hover{
        opacity: 0.8;
        background-color: #340e36;
    }
`;