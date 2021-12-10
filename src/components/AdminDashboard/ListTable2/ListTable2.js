import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import './ListTable2.css'

const ListTable2 = ({ cols, data, tableName }) => {

  return (
    <div id="table_lister">
      <div className="show-merchants-table">
        <div className="table-title mb-3 mt-2">
          <h5>All {tableName}</h5>
          <Link to='/' className="orange-link">
            See all
          </Link>
        </div>
        <Table hover responsive center>
          <thead className="merchant-table-head avenir-black">
            <tr>
              {cols.map((value, index) => {
                return <th scope="col">{value}</th>
              })}
            </tr>
          </thead>
          <tbody>
            {
              data.map((value, index) => {
                return <tr>
                  {
                    Object.entries(value).map(([key, tds]) => {
                      return <td>{tds}</td>
                    })
                  }
                </tr>
              })
            }
            {/* <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr> */}

          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ListTable2;
