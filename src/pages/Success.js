import classes from "./Success.module.css";
import { Link } from "react-router-dom";
import Button from "../components/button/Button";

const Success = () => {
  return (
    <section className={classes.successSection}>
      <div className={classes.successText}>
        <h1>Thanks for your interest in Pixel Invite!</h1>
        <h2>We will respond back within 24 hours.</h2>
        <Link to="/">
          <Button title="Back to site" />
        </Link>
      </div>
    </section>
  );
};

export default Success;
