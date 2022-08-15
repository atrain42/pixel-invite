import classes from "./Header.module.css";
import Image from "../../images/bunny.svg";

const Header = () => {
  return (
    <section className={classes.header}>
      <div className={classes.headerText}>
        <h1>Baby shower </h1>
        <h1>invitations made</h1>
        <h1>simple.</h1>
        <p>
          At PixeledInvite, we create your own personal website that acts as an
          invitation to your baby shower.
        </p>
        <a href="/#services" className={classes.exploreBtn}>
          Explore
        </a>
      </div>
      {/* <img src={Image} alt="" className={classes.headerSvg} /> */}
      <div className={classes.svgContainer}>
        <img src={Image} alt="" className={classes.headerSvg} />
      </div>
    </section>
  );
};

export default Header;