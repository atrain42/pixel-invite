import { Link } from "react-router-dom";

//components
import Dropdown from "../dropdown/Dropdown";
import MobileNavigation from "./MobileNavigation";

//styles
import classes from "./Navbar.module.css";

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
