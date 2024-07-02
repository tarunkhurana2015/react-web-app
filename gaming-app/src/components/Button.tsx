import React, { useState } from "react";
import Alert from "./Alert";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}
const Button = ({ children, color = "primary", onClick }: Props) => {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <button
        className={"btn btn-" + color}
        onClick={() => setAlertVisibility(true)}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
