import React from 'react'
import styled from "styled-components";
import CreateIcon from '@material-ui/icons/Create';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import SidebarOption from "./SidebarOption";
import CommentIcon from '@material-ui/icons/Comment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Sidebar() {
    return (
        <SidebarContainer>
            <SidebarHeader>
            <SidebarInfo>
                <h2>username</h2>
                <h3>
                    {""}
                    <FiberManualRecordIcon/>
                    email@gmail.com
                </h3>
           </SidebarInfo>
            <CreateIcon onClick = {()=> {}} />
            </SidebarHeader>
                <SidebarOption Icon = {CommentIcon} title="Thread"/>
                <SidebarOption Icon = {InboxIcon} title="Mention & Reactions"/>
                <SidebarOption Icon = {DraftsIcon} title="Save items"/>
                <SidebarOption Icon = {BookmarkIcon} title="Chanel browser"/>
                <SidebarOption Icon = {ExpandLessIcon} title="Show less"/>
                <hr/>
                <SidebarOption Icon = {AddIcon} title="Add Channel"/>
                <hr/>
                <SidebarOption Icon = {ExpandMoreIcon} title="Channels"/>
                {/* Example channel */}
                <SidebarOption title="Channel example 1"/>
                <SidebarOption title="Channel example 2"/>
                <SidebarOption title="Channel example 3"/>
        </SidebarContainer>
    );
}

export default Sidebar;
const SidebarContainer = styled.div`
    background-color: var(--main-color);
    flex: 0.3;
    border-top: 1px solid white;
    color: white;
    margin-top: 20px;
     >hr {
         margin-top: 10px;
         margin-bottom: 10px;
         border: 1px solid #49274b;
     }
`;
const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    >.MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
        cursor: pointer;
    }
`;
const SidebarInfo = styled.div`
    flex: 1;
    > h2 {
        font-size: 15px;
        font-weight: 600;
        margin-bottom: 5px;
        display: flex;
    }
    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }
    > h3 > .MuiSvgIcon-root{
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`;
