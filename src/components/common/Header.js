import React, {useState} from 'react';
import styled from "styled-components";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';
import {Menu, MenuItem} from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    return (
        <div>
            <HeaderContainer>
                <HeaderLeft>
                    <HeaderAvatar
                        onClick = {(e) => {
                            setAnchorEl(e.currentTarget);
                        }}
                    />
                    <MenuContainer>
                        <Menu 
                        id = "menu-options" 
                        anchorEl = {anchorEl} 
                        keepMounted    
                        open = {Boolean(anchorEl)}  
                        onClose = {() => {
                            setAnchorEl(false);
                        }}  
                        PaperProps = {{
                            style: {
                                marginTop: "25px",
                            },
                        }}                
                        >
                            <MenuItem onClick = {()=> {}}>Profile</MenuItem>
                            <MenuItem onClick = {()=> {}}>...</MenuItem>
                            <MenuItem onClick = {()=> {}}>Sign out</MenuItem>
                        </Menu>
                    </MenuContainer>
                    <AccessTimeIcon/>
                </HeaderLeft>
                <HeaderMiddle>
                    <SearchIcon/>
                    <input placeholder="Search"/>
                </HeaderMiddle>
                <HeaderRight>
                    <HelpIcon/>
                </HeaderRight>
            </HeaderContainer>;
        </div>
    )
}

export default Header;
const MenuContainer = styled.div`

`;

const HeaderMiddle = styled.div`
    flex: 0.4;
    border-radius: 6px;
    background-color: #421f44;
    text-align: center;
    display: flex;
    padding: 0 50px;
    color: gray;
    border: 1px gray solid;
    > input {
        background-color: transparent;
        border: none;
        text-align:center;
        min-width: 30vw;
        outline: 0;
        color: white;
    }
`;
const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;

    >.MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }
`;
const HeaderAvatar = styled(AccountCircleIcon)`
    cursor: pointer;
    :hover {
        opacity: 0.5;
    }
`;
const HeaderLeft = styled.div`
    margin-left: 20px;
    flex: 0.3;
    align-items: center;
    display:flex;
    > .MuiSvgIcon-root{
        margin-left: 0;
        margin-right: 30px;
    }
`;
const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    background-color: var(--main-color);
    align-items: center;
    justify-content: space-between;
    color: white;
    padding: 10px 5px;
`;
