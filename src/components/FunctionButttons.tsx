import { Fragment, MouseEventHandler } from "react";
import styles from "./FunctionButttons.module.css";
import Button from "./Button";
interface FunctionButttonsProps {
  onFunctionBtnClick: MouseEventHandler<HTMLButtonElement>;
}
function FunctionButttons({ onFunctionBtnClick }: FunctionButttonsProps) {
  return (
    <Fragment>
      <Button
        className={styles["btn-fnc-del"]}
        value="del"
        onClick={onFunctionBtnClick}
      >
        del
      </Button>
      <Button
        className={styles["btn-fnc-reset"]}
        value="reset"
        onClick={onFunctionBtnClick}
      >
        reset
      </Button>
    </Fragment>
  );
}

export default FunctionButttons;
