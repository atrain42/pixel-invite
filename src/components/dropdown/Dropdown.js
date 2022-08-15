import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";

import classes from "../nav/Navbar.module.css";

const Dropdown = () => {
  const [text, setText] = useState("");

  const showLinks = () => {
    if (!text) {
      setText(() => {
        return (
          <div className={classes.dropdownOptions}>
            <Link to="about" className={classes.dropdownLink}>
              About
            </Link>
            <Link to="privacy" className={classes.dropdownLink}>
              Privacy
            </Link>
            <Link to="/" className={classes.dropdownLink}>
              Expectations
            </Link>
          </div>
        );
      });
    } else {
      setText("");
    }
  };

  return (
    <div className={classes.dropdown}>
      <button onClick={showLinks}>
        Company <AiFillCaretDown />
      </button>
      <div>{text}</div>
    </div>
  );
};

export default Dropdown;
