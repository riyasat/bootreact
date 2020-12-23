import React, { HTMLAttributes, MouseEventHandler, useRef } from "react";
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
  onBeforeClose?: MouseEventHandler;
  onClose?: MouseEventHandler;
  onAfterClose?: MouseEventHandler;
  heading?: string;
  headingClassName?: string;
  icon?: string;
  useAnimation?: boolean;
}
const Alert = (props: IAlertProps) => {
  const _props = {};
  const ref = useRef<HTMLDivElement>(null);
  const ignoreKeys: string[] = ["useAnimation"];

  Object.keys(props).forEach((key) => {
    if (ignoreKeys.indexOf(key) < 0) {
      Object.assign(_props, { [key]: props[key as keyof IAlertProps] });
    }
  });
  const closeAlert = () => {
    ref.current?.toggleClass("show");
  };
  const handleClose = (e: any) => {
    if (props.onBeforeClose) {
      props.onBeforeClose(e);
    }
    closeAlert();
    if (props.onClose) {
      props.onClose(e);
    }
    if (props.onAfterClose) {
      props.onAfterClose(e);
    }
  };
  return (
    <div
      ref={ref}
      className={`alert alert-${props.variant} ${props.className ?? ""} ${
        props.onClose
          ? `alert-dismissible ${props.useAnimation ? "fade" : ""} show`
          : ""
      }`}
      {..._props}
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
          onClick={handleClose}
        ></Button>
      )}
    </div>
  );
};

export default Alert;
