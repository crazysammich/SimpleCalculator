import { ReactNode } from "react";
import styles from "./Header.module.css";
interface HeaderProps {
  className?: string;
  children?: ReactNode;
}
function Header({ className, children }: HeaderProps) {
  const classes = `${styles.header} ${className ? className : ""}`;
  return <header className={classes}>{children}</header>;
}

export default Header;
