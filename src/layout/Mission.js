import { useRef } from "react";
import { useInView } from "framer-motion";

//images
import paint from "../images/paint.png";

//styles
import "./Mission.css";

const Mission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="mission">
      <div className="mission-text" ref={ref}>
        <h1
          style={{
            transform: isInView ? "none" : "translateY(20px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.75s ease-in",
          }}
        >
          Our Mission
        </h1>
        <div
          className="mission-break"
          style={{
            transform: isInView ? "none" : "translateX(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.75s ease-in 1.25s",
          }}
        ></div>
        <p
          style={{
            transform: isInView ? "none" : "translateY(20px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.75s ease-in 0.5s",
          }}
        >
          At Pixel Invite, we create elegant web designs that help advertise
          your baby shower. Our sites allow guests to RSVP and contain
          information about your registry; lifting some weight off your
          shoulders when you are planning your baby shower.
        </p>
      </div>
      <img
        src={paint}
        alt="paint graphic"
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 0.75s ease-in 1.25s",
        }}
      />
    </section>
  );
};

export default Mission;
