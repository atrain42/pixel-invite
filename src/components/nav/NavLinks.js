import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import classes from "./Navbar.module.css";

const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -30 };
  const animateTo = { opacity: 1, y: 0 };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <ul className={classes.navLinks} ref={ref}>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
      >
        <Link
          to="/"
          onClick={() => props.isMobile && props.closeMobileMenu()}
          style={{
            transform: isInView ? "none" : "translateY(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
        >
          <li>Home</li>
        </Link>
        <Link
          to="/contact"
          onClick={() => props.isMobile && props.closeMobileMenu()}
          style={{
            transform: isInView ? "none" : "translateY(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
          }}
        >
          <li>Contact</li>
        </Link>
        <Link
          to="/templates"
          onClick={() => props.isMobile && props.closeMobileMenu()}
          style={{
            transform: isInView ? "none" : "translateY(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) .2s",
          }}
        >
          <li>Templates</li>
        </Link>

        <Link
          to="/privacy"
          onClick={() => props.isMobile && props.closeMobileMenu()}
          style={{
            transform: isInView ? "none" : "translateY(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
        >
          <li>Privacy</li>
        </Link>
        <Link
          to="/about"
          onClick={() => props.isMobile && props.closeMobileMenu()}
          style={{
            transform: isInView ? "none" : "translateY(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
          }}
        >
          <li>About</li>
        </Link>
        <Link
          to="/steps"
          onClick={() => props.isMobile && props.closeMobileMenu()}
          style={{
            transform: isInView ? "none" : "translateY(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <li>Steps</li>
        </Link>
        <h2>&#xA9; Pixel Invite, 2022.</h2>
      </motion.li>
    </ul>
  );
};

export default NavLinks;