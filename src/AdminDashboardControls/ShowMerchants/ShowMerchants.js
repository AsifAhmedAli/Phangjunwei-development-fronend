import './ShowMerchants.css';
import ListTable from '../../components/AdminDashboard/ListTable/ListTable';

import DashboardPagination from '../../components/AdminDashboard/DashboardPagination/DashboardPagination';

export default function ShowMerchants() {

    return (
        <section id="show-merchants">
            <h1 className="title mb-4">Merchants</h1>
            <ListTable />
            <DashboardPagination />
        </section>
    )
}
