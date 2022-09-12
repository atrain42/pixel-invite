import classes from "./Navbar.module.css";

import Dropdown from "../dropdown/Dropdown";
import { Link } from "react-router-dom";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.titleContainer}>
        <Link className={classes.home} to="/">
          Pixel Invite
        </Link>
        <Dropdown />
      </div>
      <MobileNavigation />
    </nav>
  );
};

export default Navbar;
