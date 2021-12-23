import './ShowMerchants.css';
import ListTable from '../../components/AdminDashboard/ListTable/ListTable';
import ListTable2 from '../../components/AdminDashboard/ListTable2/ListTable2';
import { GET_MERCHANTS } from '../../graphql/queries';
import DashboardPagination from '../../components/AdminDashboard/DashboardPagination/DashboardPagination';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { useEffect } from 'react';


export default function ShowMerchants() {
    const [merchants, setMerchants] = useState([]);
    const [offset, setOffset] = useState(0);

    const { loading, error, data } = useQuery(GET_MERCHANTS, {
        variables: {
            offset: offset
        },
    });
    useEffect(async()=>{
        if (!loading) {
            setMerchants(data.allMerchants.content );
            console.log(merchants)
        }
    },[])
     
    if (error) return <p>Error</p>
  
   

    return (
        <section id="show-merchants">
            <h1 className="title mb-4">Merchants</h1>
            {loading ? 'loading...' :<ListTable2 cols={["ID", "Name", "Adress", "Contact","Email",]} data={merchants} buttontxt={"Edit"} table_title={"All Merchants"} />}
            {loading ? ' ' : <DashboardPagination />}
        </section>
    )
}
