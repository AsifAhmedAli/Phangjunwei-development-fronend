import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import './Controls.css';
import { List } from 'react-bootstrap-icons';
import ShowMerchants from "../ShowMerchants/ShowMerchants";
import AddMerchant from "../AddMerchant/AddMerchant";
import { useState } from "react";


export default function Controls({ toggleSidebar, setToggleSidebar }) {

    const [route, setRoute] = useState('show');

    return (
        <div id="dashboard-controls">
            <a className="sidebar-toggle" onClick={() => setToggleSidebar(false)}>
                <List />
            </a>
            <Header />
            <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />

            {(() => {
                switch (route) {
                    case 'show':
                        return <ShowMerchants setRoute={setRoute} />
                    case 'add':
                        return <AddMerchant setRoute={setRoute} />
                    default:
                        return <ShowMerchants />
                }
            })()}
        </div>
    )
}
