import { useState } from "react";
import NavLinks from "./NavLinks";

//icons
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

//styles
import classes from "./Navbar.module.css";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <BiMenuAltRight
      className={classes.Hamburger}
      size="40px"
      color="#ff8ba7"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <IoMdClose
      className={classes.Hamburger}
      size='40px'
      color='#ff8ba7'
      onClick={() => setOpen(!open)}
    />
  )
  const closeMobileMenu = () => setOpen(false);

  // const closeMobileMenu = () => setOpen(false);
  return (
    <div className={classes.mobileNavigation}>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </div>
  );
};

export default MobileNavigation;
