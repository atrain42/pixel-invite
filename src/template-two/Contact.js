import { Link } from "react-router-dom";

import classes from "../Template-Components/Button/Button.module.css";

const Contact = (props) => {
  return (
    <Link to={props.destination} className={classes.btn}>
      {props.title}
    </Link>
  );
};

export default Contact;
