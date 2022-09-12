import { Link } from "react-router-dom";
import { useRef } from "react";
import { useInView } from "framer-motion";

import classes from "./Alerts.module.css";
import ArrowButton from "../ArrowButton/ArrowButton";

const SingleAlert = ({ title, info, img }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className={classes.alertContainer}>
      <img src={img} alt={title} />
      <div className={classes.alertInfo} ref={ref}>
        <h1
          style={{
            transform: isInView ? "none" : "translateX(20px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
        >
          {title}
        </h1>
        <p>{info}</p>
        <Link
          to="/templates"
          style={{
            transform: isInView ? "none" : "translateY(10px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
          }}
        >
          <ArrowButton title="View Templates &#8594;" />
        </Link>
      </div>
    </div>
  );
};

export default SingleAlert;
