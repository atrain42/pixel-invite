import { Link } from "react-router-dom";

import classes from "../pages/Templates.module.css";

const SingleTemplate = ({ path, setIsLoading }) => {
  return (
    <div className={classes.imageContainer}>
      <Link to={path}>
        <button>view</button>
      </Link>
    </div>
  );
};

export default SingleTemplate;
