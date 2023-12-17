import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

//styles
import classes from "./Question.module.css";

const Question = ({ title, info }) => {
  const [text, setText] = useState("");
  const [show, setShow] = useState(false)

  const showTextHandler = () => {
    setText(() => {
      return <p>{info}</p>;
    });
    setShow(true)
  };

  const hideTextHandler = () => {
    setText("");
    setShow(false)
  };

  const toggleTextHandler = () => {
    // Toggle between showTextHandler and hideTextHandler based on the current state
    if (show) {
      hideTextHandler()
    } else {
      showTextHandler()
    }
  }

  const style = { fontSize: '5rem' }

  const buttonType = () => {
    if (text === "") {
      return (
        <button className={classes.btn} onClick={showTextHandler}>
          <AiOutlinePlus style={style} />
        </button>
      )
    } else {
      return (
        <button className={classes.btn} onClick={hideTextHandler}>
          <AiOutlineMinus style={style} />
        </button>
      )
    }
  };

  return (
    <article onClick={toggleTextHandler} className={classes.question}>
      <header>
        <h4>{title}</h4>
        {buttonType()}
      </header>
      <p>{text}</p>
    </article>
  )
};

export default Question;
