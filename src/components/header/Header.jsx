import Paper from "@mui/material/Paper";
import styles from "./Header.module.scss";
import classNames from "classnames";

export default function Header({ left, right }) {
    return (
        <div className={classNames(styles['header-wrapper'])}>
            <div className={classNames(styles.left)}>
                <Paper className={classNames(styles.paper)}>
                    {left}
                </Paper>
            </div>

            <div className={classNames(styles.right)}>
                <Paper className={classNames(styles.paper)}>
                    {right}
                </Paper>
            </div>
        </div>
    );
}
