import classes from "./Navbar.module.css";
import Button from "../button/Button";
import Dropdown from "../dropdown/Dropdown";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className={classes.titleContainer}>
        <Link className={classes.home} to="/">
          Pixel Invite
        </Link>
        <Dropdown />
      </div>
      <div className={classes.navButtons}>
        <Link to="/templates">
          <Button title="Templates" />
        </Link>

        <Link to="/contact">
          <button className={classes.navBtnSub}>Contact</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
