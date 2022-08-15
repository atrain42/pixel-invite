import classes from "./PricingCard.module.css";
import { AiFillCheckCircle } from "react-icons/ai";
import Button from "../button/Button";

const PricingCard = () => {
  return (
    <div className={classes.pricingCard}>
      <h2>Our Offer</h2>
      <h3>Fully customized invitation website</h3>
      <h4>
        $50
        <span>
          <h6>/site</h6>
        </span>
      </h4>
      <div className={classes.checkbox}>
        <AiFillCheckCircle className={classes.check} />
        <h5>Custom designs</h5>
      </div>
      <div className={classes.checkbox}>
        <AiFillCheckCircle className={classes.check} />
        <h5>Password protected</h5>
      </div>
      <div className={classes.checkbox}>
        <AiFillCheckCircle className={classes.check} />
        <h5>Guest RSVP capability</h5>
      </div>
      <div className={classes.checkbox}>
        <AiFillCheckCircle className={classes.check} />
        <h5>Links to registry</h5>
      </div>
      <div className={classes.pricingBtn}>
        <Button title="contact" />
      </div>
    </div>
  );
};

export default PricingCard;
