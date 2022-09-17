import { Link } from "react-router-dom";
import { useRef } from "react";
import { useInView } from "framer-motion";

//components
import ArrowButton from "../ArrowButton/ArrowButton";

//styles
import classes from "./Alerts.module.css";

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
            transition: "all 0.75s ease-in",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.75s ease-in 0.5s",
          }}
        >
          {info}
        </p>
        <Link
          to="/templates"
          style={{
            transform: isInView ? "none" : "translateY(10px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.75s ease-in 1s",
          }}
        >
          <ArrowButton title="View Templates &#8594;" />
        </Link>
      </div>
    </div>
  );
};

export default SingleAlert;
