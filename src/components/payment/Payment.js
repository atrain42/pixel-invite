// import cashapp from "../../images/cashapp.svg";
// import paypal from "../../images/paypal.svg";
// import venmo from "../../images/venmo.svg";
// import applepay from "../../images/applepay.svg";

const Payment = ({ image, name }) => {
  return <img src={image} alt={name} className="payment-icon" />;
};

export default Payment;
