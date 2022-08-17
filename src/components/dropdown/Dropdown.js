import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";

import classes from "../nav/Navbar.module.css";

const Dropdown = () => {
  const [text, setText] = useState("");

  const closeDropdown = () => {
    setText("");
  };

  const showLinks = () => {
    if (!text) {
      setText(() => {
        return (
          <div className={classes.dropdownOptions}>
            <Link
              to="/about"
              onClick={closeDropdown}
              className={classes.dropdownLink}
            >
              About
            </Link>
            <Link
              to="/privacy"
              onClick={closeDropdown}
              className={classes.dropdownLink}
            >
              Privacy
            </Link>
            <Link
              to="/steps"
              onClick={closeDropdown}
              className={classes.dropdownLink}
            >
              Steps
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
