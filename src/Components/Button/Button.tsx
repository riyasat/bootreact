import React, { HTMLAttributes } from "react";
export interface IButtonProps extends HTMLAttributes<Element> {
  variant?:
    | "default"
    | "primary"
    | "danger"
    | "info"
    | "warning"
    | "panel"
    | "dark"
    | "secondary"
    | "success"
    | "close"
    | "light";
  key?: string;
  icon?: string;
  label?: string;
  type?: "submit" | "reset" | "button";
}
const Button = (props: IButtonProps) => {
  return (
    <button
      type={props.type}
      key={props.key}
      className={`btn btn-${props.variant} ${props.className ?? ""}`}
      {...props}
    >
      {props.label}
    </button>
  );
};

export default Button;
