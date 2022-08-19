import classes from "../Template-Components//Header/Header.module.css";
import Button from "../Template-Components/Button/Button";

const Header = function () {
  return (
    <section className={classes.headerThree}>
      <div className={classes.headerText}>
        <h1>Join us for a baby shower</h1>
        <h1>honoring Jane Doe</h1>
        <p>
          Sunday, Nov 16, 2022 at 12:30pm <br /> 8 Orange St. <br /> Lebanon, PA
          17042
        </p>
      </div>
      <div className={classes.btnContainer}>
        <Button
          title="Registry"
          source="https://www.amazon.com/baby-reg/example-registry-august-2022-linden/GT9KGEO73BXH"
        />
        <a href="#rsvp" className="rsvpBtn">
          RSVP
        </a>
      </div>
    </section>
  );
};

export default Header;
