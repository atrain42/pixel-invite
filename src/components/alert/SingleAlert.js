import { Link } from "react-router-dom";
import { useRef } from "react";
import { useInView } from "framer-motion";

//components
import Button from "../button/Button";

//styles
import classes from "./Alerts.module.css";

const SingleAlert = ({ title, info, img, flexDirection }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className={flexDirection}>
      <img src={img} alt={title} />
      <div className={classes.alertInfo} ref={ref}>
        <h1>
          {title}
        </h1>
        <p className={classes.alertText}>
          {info}
        </p>
        <Link
          to="/templates"
        >
          <Button title="View templates" />
        </Link>
      </div>
    </div>
  );
};

export default SingleAlert;
