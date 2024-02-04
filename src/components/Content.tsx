import { ReactNode } from "react";
import styles from "./Content.module.css";
interface ContentProps {
  className?: string;
  children?: ReactNode;
}
function Content({ className, children }: ContentProps) {
  const classes = `${styles.content} ${className ? className : ""}`;
  return <main className={classes}>{children}</main>;
}

export default Content;
