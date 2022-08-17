import { Link } from "react-router-dom";
import Payment from "../components/payment/Payment";
import Button from "../components/button/Button";
import PricingCard from "../components/price-card/PricingCard";

import cashapp from "../images/cashapp.svg";
import paypal from "../images/paypal.svg";
import venmo from "../images/venmo.svg";
import applepay from "../images/applepay.svg";

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
  return (
    <section className={classes.pricingSection}>
      <h1 className="infoTitle">Payments made easy</h1>
      <div className={classes.pricingContainer}>
        <div className={classes.pricingText}>
          <h1>We make paying for your site safe and easy</h1>
          <p>
            There is no need to enter any credit card information. Your privacy
            is important to us, which is why there is no need to insert card
            information We accept payments via PayPal, Apple Pay, Venmo, and
            CashApp. Please specify your intended payment method when filling
            out the contact form. Our payment account info will be provided to
            you via email upon confirmation of your purchase.
          </p>
          <Link to="/contact">
            <Button title="Let's get started" />
          </Link>
        </div>
        <PricingCard />
      </div>
      <div className={classes.paymentIconsContainer}>
        {payments.map((payment) => {
          return <Payment key={payment.id} {...payment} />;
        })}
      </div>
    </section>
  );
};

export default Pricing;
