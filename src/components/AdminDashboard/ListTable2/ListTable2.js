import React from "react";

const ListTable2 = ({cols,data,buttontxt,buttondis}) => {


  return (
    <div className="table-responsive ">
      <table class="table table-hover text-muted  ">
        <thead className="table-secondary ">
          <tr >
            {cols.map((value,index)=>{
                return <th scope="col ">{value}</th>
            })}
            {
              !buttondis?   <th scope="col">Operation</th>:<></>
            }
           
          </tr>
        </thead>
        <tbody>

            {
              data.map((value,index)=>{
                  return <tr>
                      {
                          Object.entries(value).map(([key, tds]) => {
                            return <td>{tds}</td>
                        })
                      }
                      {
                        !buttondis  ?  <td> <button className='btn btn-primary'>{buttontxt}</button></td>: <></>
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


      </table>
      <hr style={{marginTop:-10}} />

    </div>
  );
};

export default ListTable2;
