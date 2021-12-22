import React, { useState } from 'react'
import DashboardBars from '../../components/DashboardBars/DashboardBars'
import DashboardPagination from '../../components/AdminDashboard/DashboardPagination/DashboardPagination'
import ListTable2 from '../../components/AdminDashboard/ListTable2/ListTable2'
import goBack from '../../helpers/goBack'
import { GET_ORDERS } from '../../graphql/queries'
import { useQuery } from '@apollo/client'


const CompanyOrder = () => {
    const [allOrders, setAllOrders] = useState([]);
    const { loading, error, data } = useQuery(GET_ORDERS);

    if (data) {
        setAllOrders({ allOrders, ...data.allOrders });
    }

    const person = [
        {
            td1: "1",
            td2: "3746",
            td3: "762",
            td4: "70",
            td5: "34937974",
            td6: "active",

        },
        {
            td1: "1",
            td2: "3746",
            td3: "762",
            td4: "70",
            td5: "34937974",
            td6: "active",

        },
        {
            td1: "1",
            td2: "3746",
            td3: "762",
            td4: "70",
            td5: "34937974",
            td6: "active",

        },

    ]
    return (
        <div>
            <DashboardBars>
                <section id="show-merchants">
                    {/* <h1 className="title mb-4">Customers</h1> */}
                    <h4 className="title mb-4">
                        <a onClick={goBack}>Company A</a>
                        <span>&#x3e; Orders</span>
                    </h4>
                    {loading ? 'loading....' : <>
                        <ListTable2 cols={["Order ID", "Transaction Date", "Item", "Customer Name", "Amount", "Status",]} data={person} buttontxt={"View Invoice"} />

                        <DashboardPagination />
                    </>
                    }
                </section>
            </DashboardBars>

        </div>
    )
}

export default CompanyOrder
