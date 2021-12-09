import React from 'react'
import ListTable from '../../components/AdminDashboard/ListTable/ListTable'
import DashboardBars from '../../components/DashboardBars/DashboardBars'

import DashboardPagination from '../../components/AdminDashboard/DashboardPagination/DashboardPagination'
const ShowCustomers = () => {
    return (
        <div>
            <DashboardBars>
            <section id="show-merchants">
            <h1 className="title mb-4">Merchants</h1>
            
            <DashboardPagination />
        </section>
            </DashboardBars>
           
          
        </div>
    )
}

export default ShowCustomers
