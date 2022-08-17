import classes from "./ArrowButton.module.css";

const ArrowButton = ({ title }) => {
  return <button className={classes.arrowBtn}>{title}</button>;
};

export default ArrowButton;
