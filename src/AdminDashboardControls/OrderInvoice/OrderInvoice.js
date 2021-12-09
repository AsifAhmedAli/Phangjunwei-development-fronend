import React from 'react'
import DashboardBars from '../../components/DashboardBars/DashboardBars'
import DashboardPagination from '../../components/AdminDashboard/DashboardPagination/DashboardPagination'
import ListTable2 from '../../components/AdminDashboard/ListTable2/ListTable2'
const OrderInvoice = () => {
    const person=[
        {
            td1 : "1",
            td2 : "3746",
            td3 : "762",
            td4:  "70",
            td5 : "34937974",
            td6: "active",

        },
        {
            td1 : "1",
            td2 : "3746",
            td3 : "762",
            td4:  "70",
            td5 : "34937974",
            td6: "active",

        },
        {
            td1 : "1",
            td2 : "3746",
            td3 : "762",
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
        <ListTable2 cols={["Order ID","Transaction Date","Item", "Pending Orders", "Amount","Status",]}  data={person} buttondis={true}/>
        
        <DashboardPagination />
    </section>
        </DashboardBars>
       
      
    </div>
    )
}

export default OrderInvoice
