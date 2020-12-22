import React, { HTMLAttributes, MouseEventHandler } from "react";
import Button from "../Button/Button";
export interface IAlertProps extends HTMLAttributes<Element> {
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
    | "light";
  onClose?: MouseEventHandler;
  heading?: string;
  headingClassName?: string;
  icon?: string;
  useAnimation?: boolean;
}
const Alert = (props: IAlertProps) => {
  return (
    <div
      className={`alert alert-${props.variant} ${props.className ?? ""} ${
        props.onClose
          ? `alert-dismissible ${props.useAnimation ? "fade" : ""} show`
          : ""
      }`}
      {...props}
      role="alert"
    >
      {props.icon && <i className={`${props.icon ?? ""} mr-2`}></i>}
      {props.heading && (
        <strong className={`${props.headingClassName ?? ""}`}>
          {props.heading}
        </strong>
      )}
      {props.onClose && (
        <Button
          variant="close"
          type="button"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={props.onClose}
        ></Button>
      )}
    </div>
  );
};

export default Alert;
