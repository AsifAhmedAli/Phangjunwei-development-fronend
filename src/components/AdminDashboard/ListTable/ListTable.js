import './ListTable.css';
import { Table } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import goBack from '../../../helpers/goBack';

export default function ListTable({ product, merchantsData }) {
    let history = useHistory();

    // check if location is ending with /products
    let isProducts = history.location.pathname.endsWith('/products');

    return (
        <div id="table_lister">
            <div className="show-merchants-table">
                <div className="table-title mb-3 mt-2">
                    {product ? <h5>All Products</h5> : <h5>All Merchants</h5>}
                    <Link to={product && `${history.location.pathname}products`} className="orange-link">
                        {isProducts ? `` : 'See all'}
                    </Link>
                </div>
                <Table hover responsive center>

                    <thead className="merchant-table-head avenir-black">
                        <tr>
                            {product ? <th>Product ID</th> : <th>Merchant</th>}
                            {product && <th>Product Name</th>}
                            <th>Total Orders</th>
                            <th>Pending Orders</th>
                            <th>Total Income</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {product ? '1212' : <Link to="merchant/2" className="text-dark text-decoration-underline">Company A</Link>}
                            </td>
                            {product && <td>Otto</td>}
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
                            <td>
                                {product ? '1212' : <Link to="merchant/2" className="text-dark text-decoration-underline">Company A</Link>}
                            </td>
                            {product && <td>Otto</td>}
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
                            <td>
                                {product ? '1212' : <Link to="merchant/2" className="text-dark text-decoration-underline">Company A</Link>}
                            </td>
                            {product && <td>Otto</td>}
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
                            <td>
                                {product ? '1212' : <Link to="merchant/2" className="text-dark text-decoration-underline">Company A</Link>}
                            </td>
                            {product && <td>Otto</td>}

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
                            <td>
                                {product ? '1212' : <Link to="merchant/2" className="text-dark text-decoration-underline">Company A</Link>}
                            </td>
                            {product && <td>Otto</td>}

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
                            <td>
                                {product ? '1212' : <Link to="merchant/2" className="text-dark text-decoration-underline">Company A</Link>}
                            </td>
                            {product && <td>Otto</td>}

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
                {product ? <Link to={isProducts ? `./product/add` : history.location.pathname + 'product/add'} className="orange-link py-2 px-2">
                    Add new Product
                </Link> : <Link to={{ pathname: 'merchant/add' }} className="orange-link py-2 px-2">
                    Add new Merchant
                </Link>}

            </div>
        </div >
    )
}
