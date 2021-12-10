import React from 'react'
import ListTable from '../../components/AdminDashboard/ListTable/ListTable'
import ListTable2 from '../../components/AdminDashboard/ListTable2/ListTable2'
import DashboardBars from '../../components/DashboardBars/DashboardBars'

import DashboardPagination from '../../components/AdminDashboard/DashboardPagination/DashboardPagination'
const ShowCustomers = () => {
    const person=[
        {
            td1 : "1",
            td2 : "Muhammad Awais Shah",
            td3 : "50",
            td4:  "70",
            td5 : "34937974",
            td6: "active",

        },
        {
            td1 : "1",
            td2 : "Muhammad Awais Shah",
            td3 : "50",
            td4:  "70",
            td5 : "34937974",
            td6: "active",

        },
        {
            td1 : "1",
            td2 : "Muhammad Awais Shah",
            td3 : "50",
            td4:  "70",
            td5 : "34937974",
            td6: "active",

        },
        {
            td1 : "1",
            td2 : "Muhammad Awais Shah",
            td3 : "50",
            td4:  "70",
            td5 : "34937974",
            td6: "active",
            

        },
    ]
    return (
        <div>
            <DashboardBars>
            <section id="show-merchants">
            <h1 className="title mb-4">Customers</h1>
            <ListTable2 cols={["Customer ID","Customer Name","Total Orders", "Pending Orders", "Price","Status"]}  data={person} buttontxt={"Edit"} table_title={"All customers"}/>
            
            <DashboardPagination />
        </section>
            </DashboardBars>
           
          
        </div>
    )
}

export default ShowCustomers
