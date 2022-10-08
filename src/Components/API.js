import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { baseAPI } from "../API/BaseAPI";
import APITable from "./API_Table";
import APINavBar from "./API_NavBar";
import "../Style/API_Style.css";

export default function API() {
  
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState(1);
  const [userIdData, setUserIdData] = useState([]);

  const updateUserID = (newID) => setUserId(newID);

  const handleToggle = (patchData) => {
    let afterToggleData = JSON.parse(JSON.stringify(data));
    afterToggleData[patchData].completed =
      !afterToggleData[patchData].completed;
    setData(afterToggleData);
  };

  useEffect(() => {
    axios
      .get(baseAPI)
      .then((res) => {
        if (res.status === 200 && res.data.length > 0) {
          setData(res.data);
        } else {
          console.log("Error or No Data");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    // debugger
    setUserIdData(data.filter((x) => x.userId === userId));
    // debugger
  }, [data, userId]);

  return (
    <>
      <APINavBar updateUserID={updateUserID} />
      <APITable data={userIdData} fun={handleToggle} />
    </>
  );
}
