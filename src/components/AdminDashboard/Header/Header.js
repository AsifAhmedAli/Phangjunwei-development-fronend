import { BellIcon, ChatIcon, SupportIcon } from '../../../images/dashboard';
import './Header.css';

export default function Header() {

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

    return (
        <header id="dashboard-navbar">
            <div className="content">
                <div className="search">
                    <input type="text" placeholder="⌕  Search transactions, invoices or help" />
                </div>
                <div className="right-section">
                    <img src={ChatIcon} alt="chat" />
                    <img src={SupportIcon} alt="support" />
                    <img src={BellIcon} alt="bell" />
                    <button className="logout" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
        </header>
    )
}
