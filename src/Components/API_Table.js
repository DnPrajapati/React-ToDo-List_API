import React from "react";
import { Table } from "reactstrap";
import APITableRow from "./API_Table_Row";

export default function APITable(props) {
  return (
    <>
      <div className="wholeTable">
        <Table hover responsive>
          <thead>
            <tr className="tableHeader">
              <th>Status</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((x) => (
              <APITableRow rowData={x} key={x.id} />
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
