import React from "react";

function DataTable(props){
  return(
    <div>
    <br />
    <br />
    <table className="table table-dark table-sortable text-center">
    <thead>
      <tr>
        <th scope="col">Image</th>
        <th scope="col" data-field="name" data-sortable="true">Name</th>
        <th scope="col" data-field="email" data-sortable="true">Email</th>
        <th scope="col" data-field="email" data-sortable="true">Cell</th>
        <th scope="col" data-field="email" data-sortable="true">Location</th>
        
        
        </tr>
        </thead>
        <tbody>
          <td></td>
        </tbody>
        </table>
        </div>
        )
}


 export default DataTable;