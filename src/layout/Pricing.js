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

import SectionHeader from "../components/sectionHeader/SectionHeader";

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
      <SectionHeader
        subtitle='STRAIGHTFORWARD & EASY'
        title='Payments made simple'
        text="We don't require you to insert card information. Check below for the payment options. We will not build your site until the full amount has been paid upfront."
      />
      <div className={classes.pricingContainer} ref={ref}>
        <img
          src={handwall}
          alt='pricing vector graphic'
        />
        <PricingCard />
      </div>
      <span class={classes.paymentHeader}>
        <span>Payment Methods</span>
        <p>We don't require you to insert card information.</p>
      </span>
      <div className={classes.paymentIconsContainer}>
        {payments.map((payment) => {
          return <Payment key={payment.id} {...payment} />
        })}
      </div>
    </section>
  )
};

export default Pricing;
