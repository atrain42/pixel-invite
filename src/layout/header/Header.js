import { useRef } from "react";
import { useInView } from "framer-motion";

import classes from "./Header.module.css";
import Image from "../../images/bunny.svg";

const Header = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={classes.header}>
      <div className={classes.headerText} ref={ref}>
        <h1
          style={{
            transform: isInView ? "none" : "translateX(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
        >
          Baby shower{" "}
        </h1>
        <h1
          style={{
            transform: isInView ? "none" : "translateX(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s",
          }}
        >
          invitations made
        </h1>
        <h1
          style={{
            transform: isInView ? "none" : "translateX(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          simple.
        </h1>
        <p
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.75s",
          }}
        >
          At Pixel Invite, we create your own personal website that acts as an
          invitation to your baby shower. Let's reinvent the way we send
          invitations.
        </p>
      </div>
      {/* <img src={Image} alt="" className={classes.headerSvg} /> */}
      <div className={classes.svgContainer}>
        <img src={Image} alt="" className={classes.headerSvg} />
      </div>
    </section>
  );
};

export default Header;
