import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import styles from "./LoginPage.module.scss";
import classNames from "classnames";
import Login from "../../src/components/login/Login";
 
export default function LoginPage() {
  return (
    <div className={classNames(styles.wrapper)}>
      <Container className={classNames(styles.container)}>
        <Paper className={classNames(styles.paper)}>
          <Login></Login>
        </Paper>
        {/* <div className={classNames(styles.textContainer)}>
        <p >Don't have an account? </p>
        <a href="">Register today!</a>
        </div> */}
      </Container>
    </div>
  );
}
