import './ShowMerchants.css';
import ListTable from '../../components/AdminDashboard/ListTable/ListTable';
import { GET_MERCHANTS } from '../../graphql/queries';
import DashboardPagination from '../../components/AdminDashboard/DashboardPagination/DashboardPagination';
import { useQuery } from '@apollo/client';
import { useState } from 'react';

export default function ShowMerchants() {
    const [merchants, setMerchants] = useState([]);
    const [offset, setOffset] = useState(0);

    const { loading, error, data } = useQuery(GET_MERCHANTS, {
        variables: {
            offset: offset
        },
        headers: {
            authorization: localStorage.getItem('firsttoken') || null
        }
    });

    if (error) return <p>Error</p>
    if (data) {
        setMerchants({ merchants, ...data.allMerchants.content });
    }

    return (
        <section id="show-merchants">
            <h1 className="title mb-4">Merchants</h1>
            {loading ? 'loading...' : <ListTable merchantsData={merchants} />}
            {loading ? ' ' : <DashboardPagination />}
        </section>
    )
}
