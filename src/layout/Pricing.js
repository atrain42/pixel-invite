//components
import Payment from "../components/payment/Payment";
import PricingCard from "../components/price-card/PricingCard";

//images
import cashapp from "../images/cashapp.svg";
import paypal from "../images/paypal.svg";
import venmo from "../images/venmo.svg";
import applepay from "../images/applepay.svg";
import handwall from "../images/hand-in-wall.png";

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
  return (
    <section className={classes.pricingSection}>
      <h1 className="infoTitle">Payments</h1>
      <div className={classes.pricingContainer}>
        <img src={handwall} alt="graphic" />
        <PricingCard />
      </div>
      <span class={classes.paymentHeader}>
        <h2>methods we accept</h2>
        <p>we don't require you to insert card information.</p>
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
