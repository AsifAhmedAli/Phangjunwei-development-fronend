import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import './ListTable2.css'

const ListTable2 = ({ cols, data, buttontxt, buttondis, table_title }) => {


  return (
    <div className="show-merchants-table">

      <div className="table-responsive bg-white p-4 rounded ">
        <h5 className="table-title mb-3 mt-2">{table_title}</h5>
        <Table hover responsive center>
          <thead className="merchant-table-head avenir-black">
            <tr >
              {cols.map((value, index) => {
                return <th key={index} scope="col ">{value}</th>
              })}
              {
                !buttondis ? <th scope="col">Operation</th> : <></>
              }

            </tr>
          </thead>
          <tbody>

            {
              data.map((value, index) => {
                return <tr key={index}>
                  {
                    Object.entries(value).map(([key, tds]) => {
                      return <td>{tds}</td>
                    })
                  }
                  {
                    !buttondis ? <td> <button className='btn btn-primary py-0 px-4'>{buttontxt}</button></td> : <></>
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
        <hr style={{ marginTop: -10 }} />

      </div>
    </div>
  );
};

export default ListTable2;
