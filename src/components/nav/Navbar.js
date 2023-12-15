import { Link } from "react-router-dom";

//components
import Dropdown from "../dropdown/Dropdown";
import MobileNavigation from "./MobileNavigation";

import logo from '../../images/logo.png'

//styles
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.titleContainer}>
        <Link className={classes.home} to='/'>
          <img src={logo} alt='' className={classes.logo} />
          <span>Pixel Invite</span>
        </Link>
        <div className={classes.linkContainer}>
          <Link to='/about'>About</Link>
          <Link to='/privacy'>Privacy</Link>
          <Link to='/steps'>Steps</Link>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
