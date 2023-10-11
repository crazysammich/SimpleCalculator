import { ReactNode, MouseEventHandler } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  value: string | number;
  type?: "button" | "submit";
  children?: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function Button(props: ButtonProps) {
  const { value, type, children, className, onClick } = props;
  const classes = `${styles.btn} ${className ? className : ""}`;
  const defType = type ? type : "button";
  return (
    <button type={defType} className={classes} value={value} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
