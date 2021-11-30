import { useState, useEffect } from 'react';
import Auth from '../components/AdminDashboard/Auth/Auth'
import Controls from '../components/AdminDashboard/Controls/Controls';
import './AdminDashboard.css';

export default function AdminDashboard() {
    const [user, setUser] = useState(true);

    const [toggleSidebar, setToggleSidebar] = useState(typeof window !== 'undefined' && window.matchMedia("(max-width: 768px)").matches);

    useEffect(() => {
        window.matchMedia("(max-width: 768px)").addEventListener('change', e => {
            setToggleSidebar(e.matches);
        });
    }, [])

    return (
        <div id="admin-dashboard">
            {user ? <Controls toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} /> : <Auth />}
        </div>
    )
}
