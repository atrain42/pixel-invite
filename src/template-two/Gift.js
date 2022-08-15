import classes from "./TopGifts.module.css";
import { Link } from "react-router-dom";

const Gift = ({ title, image, info }) => {
  return (
    <div className={classes.gift}>
      <img src={image} alt="gift" />
      <div className={classes.giftText}>
        <h1>{title}</h1>
        <p>{info}</p>
        <Link to="#">
          <button>See in registry &#8594;</button>
        </Link>
      </div>
    </div>
  );
};

export default Gift;
