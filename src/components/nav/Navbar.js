import { Link } from "react-router-dom";
import { useState } from 'react'

//components
import Dropdown from "../dropdown/Dropdown";
import MobileNavigation from "./MobileNavigation";

import logo from '../../images/logo.png'

//styles
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)

  const applyShadow = () => {
    window.scrollY >= 80 ? setNavbar(true) : setNavbar(false)
  }

  window.addEventListener('scroll', applyShadow)

  return (
    <nav className={`${navbar ? classes.active : ''}`}>
      <div className={classes.titleContainer}>
        <Link className={classes.home} to='/'>
          <img src={logo} alt='' className={classes.logo} />
          <span>Pixel Invite</span>
        </Link>
        <div className={classes.linkContainer}>
          <Link className={classes.hoverLink} to='/templates'>
            Templates
          </Link>
          <Link className={classes.hoverLink} to='/contact'>
            Get started
          </Link>
          <Link className={classes.hoverLink} to='/privacy'>
            Privacy
          </Link>
          <Link className={classes.hoverLink} to='/steps'>
            Steps
          </Link>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
