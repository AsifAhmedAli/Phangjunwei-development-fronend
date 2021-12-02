import { useState } from "react"
import { Pagination } from "react-bootstrap"
import './DashboardPagination.css'

export default function DashboardPagination() {

    const [page, setPage] = useState(1)

    return (
        <div className="text-center mt-4" id="dashboard-pagination">
            <Pagination>
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>

                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
                <Pagination.Item>{6}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Next />
            </Pagination>
        </div>
    )
}
