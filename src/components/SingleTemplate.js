import { Link } from "react-router-dom";

import classes from "../pages/Templates.module.css";

const SingleTemplate = ({ path, setIsLoading }) => {
  const loadHandler = () => {
    setIsLoading(true);
  };
  return (
    <div className={classes.imageContainer}>
      <Link to={path}>
        <button onClick={loadHandler}>view</button>
      </Link>
    </div>
  );
};

export default SingleTemplate;
