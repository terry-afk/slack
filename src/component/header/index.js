import React from "react";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import SearchIcon from "@material-ui/icons/Search"
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import './index.css';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                {/* Avatars for logged in use */}
                <Avatar
                    className="header__avatar"
                    alt="Alexis Fabarez"
                />
                {/* Time icon */}
                <AccessTimeIcon />
            </div>
            <div className="header__search">
                {/* Search icon */}
                <SearchIcon />
                {/* input */}
                <input placeholder="Search"/>
            </div>
            <div className="header__right">
                {/* help icon */}
                <HelpOutlineOutlinedIcon />
            </div>
        </div>
    )
}

export default Header