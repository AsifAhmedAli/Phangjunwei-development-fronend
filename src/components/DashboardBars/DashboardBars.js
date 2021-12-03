import { useState, useEffect } from "react";
import Header from "../AdminDashboard/Header/Header";
import { List } from 'react-bootstrap-icons';
import './DashboardBars.css';
import Sidebar from "../AdminDashboard/Sidebar/Sidebar";

export default function DashboardBars({ children }) {
    const [route, setRoute] = useState('show');
    const [user, setUser] = useState(true);

    const [toggleSidebar, setToggleSidebar] = useState(typeof window !== 'undefined' && window.matchMedia("(max-width: 768px)").matches);

    useEffect(() => {
        window.matchMedia("(max-width: 768px)").addEventListener('change', e => {
            setToggleSidebar(e.matches);
        });
    }, [])
    return (
        <div className="dashboard-gray-bg">
            <a className="sidebar-toggle" onClick={() => setToggleSidebar(false)}>
                <List />
            </a>
            <Header />
            <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
            {children}
        </div>
    )
}
