//styles
import classes from "./Button.module.css";

const Button = ({ title }) => {
  return <button className={classes.solidBtn}>{title}</button>;
};

export default Button;
