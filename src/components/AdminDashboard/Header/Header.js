import { BellIcon, ChatIcon, SupportIcon } from '../../../images/dashboard';
import './Header.css';
import { useMutation } from '@apollo/client';
import { LOGOUT } from '../../../graphql/mutations';

export default function Header() {
    const [LogoutMutation, { loading, error, data }] = useMutation(LOGOUT);

    const handleLogout = async () => {
        localStorage.removeItem('firstLogin');
        const respons = await LogoutMutation();
        console.log(respons);
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
