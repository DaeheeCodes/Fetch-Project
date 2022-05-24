import "./Sidebar.css";
import SidebarLink from "./SidebarLink";
import React from "react";
import { NavLink } from "react-router-dom";  
import HomeIcon from '@mui/icons-material/Home';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

//transcription bug where some css components dont get inheritted. using style component for readability rather than in-line.

//NavLink is used to support styling options that Link does not support
function Sidebar(){

  return(
    <div className={'sidebar'}>
        <h2 className="title">The Fetch Shop!</h2>
                <NavLink to="/shop" style={{ textDecoration: 'none' , color: 'beige'}} activeClassName="current" exact >
                    <SidebarLink className="link" text="Points Shop" /> <HomeIcon className ="icon"  />
                </NavLink>
                <NavLink to="/admin" style={{ textDecoration: 'none' , color: 'beige'}} activeClassName="current" exact>
                    <SidebarLink className="link" text="Admin"/> <AdminPanelSettingsIcon className ="icon" />
                </NavLink>
    </div>
  );
}
export default Sidebar;

