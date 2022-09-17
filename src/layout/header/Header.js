import { useRef } from "react";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";
//images
import Image from "../../images/bunny.svg";

//styles
import classes from "./Header.module.css";

const Header = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={classes.header} ref={ref}>
      <div className={classes.headerText}>
        <h1
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 2s ease-in",
          }}
        >
          Baby shower{" "}
        </h1>
        <h1
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 2s ease-in 0.5s",
          }}
        >
          invitations made
        </h1>
        <h1
          style={{
            transform: isInView ? "none" : "translateX(20px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1.25s",
          }}
        >
          simple.
        </h1>
        <p>
          At Pixel Invite, we create your own personal website that acts as an
          invitation to your baby shower. Planning baby showers are hard, let us
          worry about the invitations. Let's reinvent the way we send
          invitations together.
        </p>
        <div className={classes.navButtons}>
          <Link to="/templates">
            <button className={classes.navBtn}>Templates</button>
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
