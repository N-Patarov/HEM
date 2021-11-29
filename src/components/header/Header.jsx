import Paper from "@mui/material/Paper";
import styles from "./Header.module.scss";
import classNames from "classnames";

export default function Header(props) {
  return (
    <div className="header-wrapper">
      <div className={classNames(styles.left)}>
        <Paper className={classNames(styles.paper)}>
        {props.left}
        </Paper>
      </div>

      <div className={classNames(styles.right)}>
        <Paper className={classNames(styles.paper)}>
        {props.right}
        </Paper>
      </div>
    </div>
  );
}
