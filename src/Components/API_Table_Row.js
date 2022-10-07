import React from "react";
import done from "../Resource/icon/done_icon.svg";
import notdone from "../Resource/icon/notdone_icon.svg";

function APITableRow(props) {
  return (
    <>
      <tr
        className={props.rowData.completed ? "table-success" : "table-danger"}
      >
        <td>
          {props.rowData.completed ? (
            <div>
              <img src={done} className="iconOfStatus" alt="Done" />
              <span>Done</span>
            </div>
          ) : (
            <div>
              <img src={notdone} className="iconOfStatus" alt="Pending" />
              <span>Pending</span>
            </div>
          )}
        </td>
        <td className="tableDescription">{props.rowData.title}</td>
        <td className="tableAction">helo</td>
      </tr>
    </>
  );
}

export default APITableRow;
