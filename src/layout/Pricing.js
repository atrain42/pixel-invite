import { useRef } from "react";
import { useInView } from "framer-motion";

//components
import Payment from "../components/payment/Payment";
import PricingCard from "../components/price-card/PricingCard";

//images
import cashapp from "../images/cashapp.svg";
import paypal from "../images/paypal.svg";
import venmo from "../images/venmo.svg";
import applepay from "../images/applepay.svg";
import handwall from "../images/deal-maker.png";

//styles
import classes from "./Pricing.module.css";

const payments = [
  {
    id: 1,
    image: cashapp,
    name: "cashapp",
  },
  {
    id: 2,
    image: venmo,
    name: "venmo",
  },
  {
    id: 3,
    image: applepay,
    name: "applepay",
  },
  {
    id: 4,
    image: paypal,
    name: "paypal",
  },
];

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={classes.pricingSection}>
      <h1 className="infoTitle">Payments</h1>
      <div className={classes.pricingContainer} ref={ref}>
        <img
          src={handwall}
          alt="graphic"
          style={{
            transform: isInView ? "none" : "scale()",
            opacity: isInView ? 1 : 0,
            transition: "all 1s ease-in 0.25s",
          }}
        />
        <PricingCard />
      </div>
      <span class={classes.paymentHeader}>
        <h2>Payment Methods</h2>
        <p>We don't require you to insert card information.</p>
      </span>
      <div className={classes.paymentIconsContainer}>
        {payments.map((payment) => {
          return <Payment key={payment.id} {...payment} />;
        })}
      </div>
    </section>
  );
};

export default Pricing;
