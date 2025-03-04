import { Link } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar({ toggleSidebar, setToggleSidebar }) {
    return (
        <div id='dashboard-sidebar' className={`${toggleSidebar ? 'dashboard-sidebar-close' : 'dashboard-sidebar-open'}`}>
            <div className="close-toggle" onClick={() => setToggleSidebar(true)}>
                {toggleSidebar ? "" : "X"}
            </div>
            <div className="content">
                <h1 className="logo">
                    Burrows admin
                </h1>
                <div className="items">
                    <Link to="/dashboard/merchants">Merchants</Link>
                    <Link to="/dashboard/customers">Customers</Link>
                    <Link to="/">Settings</Link>
                </div>
            </div>
        </div>
    )
}
