//icons
import { AiFillCheckCircle } from "react-icons/ai";

//styles
import classes from "./PricingCard.module.css";

const PricingCard = () => {
  return (
    <div className={classes.pricingCard}>
      <h2>Our Offer</h2>
      <h3>Fully customized invitation website</h3>
      <h4>
        $75
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
        <h5>Personalized images</h5>
      </div>
      <div className={classes.checkbox}>
        <AiFillCheckCircle className={classes.check} />
        <h5>Guest RSVP capability</h5>
      </div>
      <div className={classes.checkbox}>
        <AiFillCheckCircle className={classes.check} />
        <h5>Links to registry</h5>
      </div>
    </div>
  );
};

export default PricingCard;
