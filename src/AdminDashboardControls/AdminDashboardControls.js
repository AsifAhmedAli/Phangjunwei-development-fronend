import './AdminDashboardControls.css';
import ShowMerchants from "./ShowMerchants/ShowMerchants";
import DashboardBars from '../components/DashboardBars/DashboardBars';


export default function AdminDashboardControls() {

    return (
        <div id="dashboard-controls">
            <DashboardBars>
                <ShowMerchants />
            </DashboardBars>
        </div>
    )
}
