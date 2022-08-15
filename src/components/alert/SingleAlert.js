import classes from "./Alerts.module.css";

const SingleAlert = ({ title, info, img }) => {
  return (
    <div className={classes.alertContainer}>
      <img src={img} alt={title} />
      <div className={classes.alertInfo}>
        <h1>{title}</h1>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default SingleAlert;
