import React from "react";
import done from "../Resource/icon/done_icon.svg";
import notdone from "../Resource/icon/notdone_icon.svg";
import toggle from "../Resource/icon/toggle_icon.svg";

function APITableRow(props) {

  let isComplete = props.rowData.completed;
  
  const handleToggle = (data) => {
    props.fun(data)
  }
  return (
    <>
      <tr
        className={
          isComplete
            ? "table-success tableActionBtn"
            : "table-danger tableActionBtn"
        }
      >
        <td>
          {isComplete ? (
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
        <td className="tableAction">
          <img src={toggle} alt="Toggle" className="iconOfStatus actionIcon" onClick={() => handleToggle(props.rowData.id-1)}/>
        </td>
      </tr>
    </>
  );
}

export default APITableRow;
