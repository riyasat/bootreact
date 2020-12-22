import React from "react";
import Alert from "../Components/Alert/Alert";

const Main = () => {
  const handleAlertClick = () => {
    console.log("wayaysdfa");
  };
  return (
    <div>
      <p>Prev Sibling</p>
      <Alert variant="primary" onClose={handleAlertClick}></Alert>
      <p>next Sibling</p>
    </div>
  );
};

export default Main;
