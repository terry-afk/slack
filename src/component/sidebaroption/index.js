import React from "react";
import "./index.css";

function SidebarOption({ Icon, title }) {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption__icon"/>}
            {Icon ? (
                <h3 className="sidebarOption__channel">{title}</h3>
            ): (
                <h3 className="sidebarOption__channel"><span className="sidebarOption__hash">#</span> {title}</h3>
            )}
        </div>
    )
}

export default SidebarOption