import './ShowMerchants.css';
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import DashboardPagination from '../DashboardPagination/DashboardPagination';

export default function ShowMerchants({ setRoute }) {
    return (
        <section id="show-merchants">
            <h1 className="title mb-4">Merchants</h1>
            <div className="show-merchants-table">
                <div className="table-title mb-3 mt-2">
                    <h5>All Merchants</h5>
                    <Link href="/" className="orange-link">
                        See all
                    </Link>
                </div>
                <Table hover responsive center>
                    <thead className="merchant-table-head avenir-black">
                        <tr>
                            <th>Merchant</th>
                            <th>Products</th>
                            <th>Total Orders</th>
                            <th>Pending Orders</th>
                            <th>Total Income</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>Otto</td>
                            <td>Otto</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <button className="btn btn-primary py-0 px-4">
                                    Edit
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>Thornton</td>
                            <td>Thornton</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>
                                <button className="btn btn-primary py-0 px-4">
                                    Edit
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Larry</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@facebook</td>
                            <td>
                                <button className="btn btn-primary py-0 px-4">
                                    Edit
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Larry</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@facebook</td>
                            <td>
                                <button className="btn btn-primary py-0 px-4">
                                    Edit
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Larry</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@facebook</td>
                            <td>
                                <button className="btn btn-primary py-0 px-4">
                                    Edit
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Larry</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@facebook</td>
                            <td>
                                <button className="btn btn-primary py-0 px-4">
                                    Edit
                                </button>
                            </td>
                        </tr>

                    </tbody>

                </Table>
                <a href="#" onClick={() => setRoute('add')} className="orange-link py-2 px-2">
                    Add new Merchant
                </a>
            </div>
            <DashboardPagination />
        </section>
    )
}
