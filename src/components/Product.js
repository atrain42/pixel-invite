import React, { useContext } from "react";
import { LoadingContext } from "../layout/Home";
import Loader from "./Loader";

import { Link } from "react-router-dom";

const Product = ({ title, path }) => {
  const { loaderHandler, isLoading } = useContext(LoadingContext);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Link to={path} onClick={loaderHandler}>
        {title}
      </Link>
    </div>
  );
};

export default Product;
