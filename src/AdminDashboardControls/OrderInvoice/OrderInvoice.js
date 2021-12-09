import React from "react";
import DashboardBars from "../../components/DashboardBars/DashboardBars";
import DashboardPagination from "../../components/AdminDashboard/DashboardPagination/DashboardPagination";
import ListTable2 from "../../components/AdminDashboard/ListTable2/ListTable2";
const OrderInvoice = () => {
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
  ];
  return (
    <div>
      <DashboardBars>
        <section id="show-merchants">
          <h1 className="title mb-4">Customers</h1>
          <div className="container">
            <div className="row px-3  d-flex justify-content-between mb-5">
              <div className=" mb-3 ">
                <h1>Customer A</h1> 
                <div>
                  Singapor Address <br />
                  Ph : 030303030
                </div>
               
              </div>
              <div className=" ">
                    <h4 className="mb-3">Invoice</h4>
                    <div>
                    <button className="btn btn-primary">Invoice</button>

                    </div>
              </div>
            </div>
            <hr className="mb-3" />
            <div className="row mb-3 px-3 d-flex justify-content-between">
                <div className="">
                  
                  <strong>
                   Invoice To</strong>
                   <br />
                   
                       Singapore Adress <br />
                       Postal Code,12345
                   
                </div>
                <div className=" ">
                    <strong>Order Date: </strong> Nov 15,2021 <br />
                    <strong>Order Status: </strong> <span class="badge badge-pill badge-success">Pending</span> <br />
                    <strong>Order Pending: </strong> #12345 <br />
                </div>
            </div>
            <div className="row  mb-3">
              <div className="col">
                <ListTable2
                  cols={[
                    "Order ID",
                    "Transaction Date",
                    "Item",
                    "Pending Orders",
                    "Amount",
                    "Status",
                  ]}
                  data={person}
                  buttondis={true}
                />
              </div>
            </div>
            
            <div className=" d-flex justify-content-end text-right p-4  ">
                <div>
                <strong>Sub Total: </strong> Nov 15,2021 <br />
                    <strong>Discount: </strong> Pending <br />
                    <strong>Vat: </strong> #12345 <br />
                </div>
                   
                </div>

            
            {/* <DashboardPagination /> */}
          </div>
        </section>
      </DashboardBars>
    </div>
  );
};

export default OrderInvoice;
