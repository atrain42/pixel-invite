import couple from "../images/couple.jpg";

import classes from "./Gender.module.css";

const Gender = () => {
  return (
    <section className={classes.gender}>
      {/* <div className={classes.genderOverlay}></div> */}
      <h1 className="templateTitle">It's a boy!</h1>
      <div className={classes.genderContent}>
        <img src={couple} alt="couple" />
        <div className={classes.genderText}>
          <h1>Oh boy...</h1>
          <p>
            Mike and I are so excited to announce that we are having a boy! Mike
            was really hoping for a boy, now he will have a permanent fishing
            buddy. The baby is healthy and the anticipated due date is December
            25th. Our last doctors appointment he weighed 5 pounds and had a
            heartbeat of 120 beats/minute. We are so excited to meet our little
            Christmas baby!
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h2>Name reveal:</h2>
          <p>James Michael Conley</p>
        </div>
      </div>
    </section>
  );
};

export default Gender;
