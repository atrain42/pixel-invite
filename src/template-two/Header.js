import classes from "../Template-Components/Header/Header.module.css";
import Button from "../Template-Components/Button/Button";
import { Link } from "react-router-dom";

const Header = function () {
  return (
    <section className={classes.headerTwo}>
      <div className={classes.headerText}>
        <h1>Join us for a baby shower</h1>
        <h1>hosted by Mikayla and Mike</h1>
        <p>
          Sunday, Nov 16, 2022 at 12:30pm <br /> 8 Orange St. <br /> Lebanon, PA
          17042
        </p>
      </div>
      <div className={classes.btnContainer}>
        <Button title="Registry" source="#" />
        <Link to="/" className="rsvpBtn">
          RSVP
        </Link>
      </div>
    </section>
  );
};

export default Header;
