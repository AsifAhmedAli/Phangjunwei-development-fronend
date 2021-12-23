import React, { useState, useEffect } from 'react'
import ListTable from '../../components/AdminDashboard/ListTable/ListTable'
import ListTable2 from '../../components/AdminDashboard/ListTable2/ListTable2'
import DashboardBars from '../../components/DashboardBars/DashboardBars'
import { COUNT_USER_ORDERS, GET_USERS } from '../../graphql/queries'
import DashboardPagination from '../../components/AdminDashboard/DashboardPagination/DashboardPagination'
import { useQuery } from '@apollo/client'
const ShowCustomers = () => {
    const [users, setUsers] = useState([]);
    const [offset, setOffset] = useState(0);

    const { loading, error, data } = useQuery(GET_USERS, {
        variables: {
            offset: offset
        },
    });

    useEffect(() => {
        if (data) {
            setUsers([users, ...data.allUser.content]);
        }
    }, [data])

    if (error) return <p>Error fetching Data, Login Again</p>

    const person = [
        {
            td1: "1",
            td2: "Muhammad Awais Shah",
            td3: "50",
            td4: "70",
            td5: "34937974",
            td6: "active",

        },
        {
            td1: "1",
            td2: "Muhammad Awais Shah",
            td3: "50",
            td4: "70",
            td5: "34937974",
            td6: "active",

        },
        {
            td1: "1",
            td2: "Muhammad Awais Shah",
            td3: "50",
            td4: "70",
            td5: "34937974",
            td6: "active",

        },
        {
            td1: "1",
            td2: "Muhammad Awais Shah",
            td3: "50",
            td4: "70",
            td5: "34937974",
            td6: "active",


        },
    ]
    return (
        <div>
            <DashboardBars>
                <section id="show-merchants">
                    <h1 className="title mb-4">Customers</h1>
                    {loading ? 'loading ....' :
                        <>
                            <ListTable2 cols={["Customer ID", "Customer Name", "Total Orders", "Pending Orders", "Price", "Status"]} data={users} buttontxt={"Edit"} table_title={"All customers"} />
                            <DashboardPagination />
                        </>
                    }
                </section>
            </DashboardBars>


        </div>
    )
}

export default ShowCustomers
