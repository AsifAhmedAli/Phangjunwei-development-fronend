import './ShowMerchants.css';
import ListTable from '../../components/AdminDashboard/ListTable/ListTable';
import ListTable2 from '../../components/AdminDashboard/ListTable2/ListTable2';
import { GET_MERCHANTS } from '../../graphql/queries';
import DashboardPagination from '../../components/AdminDashboard/DashboardPagination/DashboardPagination';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { useEffect } from 'react';


export default function ShowMerchants() {

    return (
        <section id="show-merchants">
            <h1 className="title mb-4">Merchants</h1>
            <ListTable />
            <DashboardPagination />
        </section>
    )
}
