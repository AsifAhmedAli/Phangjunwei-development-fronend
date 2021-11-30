import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import './Controls.css';
import { List } from 'react-bootstrap-icons';
import { useState } from "react";
import { useEffect } from "react";

export default function Controls({ toggleSidebar, setToggleSidebar }) {

    return (
        <div>
            <a className="sidebar-toggle" onClick={() => setToggleSidebar(!toggleSidebar)}>
                {toggleSidebar ? <List /> : "X"}
            </a>
            <Header />
            <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
        </div>
    )
}
