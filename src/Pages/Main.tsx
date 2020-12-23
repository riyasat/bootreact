import React, { useState } from "react";
import Alert from "../Components/Alert/Alert";
import Button from "../Components/Button/Button";

const Main = () => {
  const [isHidden, setIsHidden] = useState(false);
  const handleAlertClick = () => {
    document.getElement("#primaryAlert")?.toggleClass("show");
    setIsHidden(() => false);
  };
  const onClose = () => {
    setIsHidden(() => true);
  };
  return (
    <div>
      <p>Prev Sibling</p>
      <Alert
        id="primaryAlert"
        variant="primary"
        onClose={onClose}
        useAnimation={true}
      ></Alert>
      {isHidden && (
        <Button
          variant="primary"
          label="Show Alert"
          onClick={handleAlertClick}
        ></Button>
      )}
      <p>next Sibling</p>
    </div>
  );
};

export default Main;
