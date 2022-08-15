import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <a href={props.source} className={classes.btn}>
      {props.title}
    </a>
  );
};

export default Button;
