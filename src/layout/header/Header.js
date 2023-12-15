import { useRef } from "react";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";
//images
import Image from "../../images/bunny2.svg";

//styles
import classes from "./Header.module.css";

const Header = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const animation = (duration, delay) => {
    return {
      opacity: isInView ? 1 : 0,
      transition: `opacity ${duration} ease-in ${delay}`
    }
  }

  return (
    <section className={classes.header} ref={ref}>
      <div className={classes.headerText}>
        <h1 style={animation('0.65s', '0s')}>Baby shower </h1>
        <h1 style={animation('0.65s', '0.35s')}>invitations made</h1>
        <h1 style={animation('0.65s', '0.7s')}>simple.</h1>
        <p style={animation('0.65s', '1.05s')}>
          At Pixel Invite, we create your own personal website that acts as an
          invitation to your baby shower. Planning baby showers is hard, let us
          worry about the invitations.
        </p>
        <div style={animation('0.65s', '1.40s')} className={classes.navButtons}>
          <Link to='/templates'>
            <button className={classes.navBtn}>Browse Templates</button>
          </Link>
          <Link to='/contact'>
            <button className={classes.navBtnSub}>Get started</button>
          </Link>
        </div>
      </div>
      {/* <img src={Image} alt="" className={classes.headerSvg} /> */}
      <div className={classes.svgContainer}>
        <img src={Image} alt='' className={classes.headerSvg} />
      </div>
    </section>
  )
};

export default Header;
