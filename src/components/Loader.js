import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={classes.articleLoaderOuter}>
      <div className={classes.loading}>
        <div className={classes.dot}></div>
        <div className={classes.dot}></div>
        <div className={classes.dot}></div>
        <div className={classes.dot}></div>
        <div className={classes.dot}></div>
      </div>
    </div>
  );
};

export default Loader;
