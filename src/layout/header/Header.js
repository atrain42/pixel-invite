import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import Image from "../../images/bunny.svg";
import Button from "../../components/button/Button";

const Header = () => {
  return (
    <section className={classes.header}>
      <div className={classes.headerText}>
        <h1>Baby shower </h1>
        <h1>invitations made</h1>
        <h1>simple.</h1>
        <p>
          At Pixel Invite, we create your own personal website that acts as an
          invitation to your baby shower. Planning baby showers are hard, let us
          worry about the invitations. Let's reinvent the way we send
          invitations together.
        </p>
        <div className={classes.navButtons}>
          <Link to="/templates">
            <Button title="Templates" />
          </Link>

          <Link to="/contact">
            <button className={classes.navBtnSub}>Contact</button>
          </Link>
        </div>
      </div>
      {/* <img src={Image} alt="" className={classes.headerSvg} /> */}
      <div className={classes.svgContainer}>
        <img src={Image} alt="" className={classes.headerSvg} />
      </div>
    </section>
  );
};

export default Header;
