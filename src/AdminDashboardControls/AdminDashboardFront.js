import './AdminDashboardFront.css';
import ShowMerchants from "./ShowMerchants/ShowMerchants";
import DashboardBars from '../components/DashboardBars/DashboardBars';


export default function AdminDashboardFront() {

    return (
        <div id="dashboard-front">
            <DashboardBars>
                <ShowMerchants />
            </DashboardBars>
        </div>
    )
}
