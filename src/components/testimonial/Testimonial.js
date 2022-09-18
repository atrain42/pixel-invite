import { useRef } from "react";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";

//components
import Button from "../../components/button/Button";

//styles
import classes from "./Testimonial.module.css";

const Testimonial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={classes.testimonialSection} ref={ref}>
      <p
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 1s ease-in",
        }}
      >
        "I think [Pixel Invite] is a great idea. For my shower, I had to hand
        write every invitation and figure out each guest's address. It would
        have been way easier to send my guests a link to a website that contains
        all the information on the shower."
      </p>
      <h4>- Sarah S, mother of three</h4>
      <Link
        to="/contact"
        style={{
          transform: isInView ? "none" : "translateY(40px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s ease-in 1.25s",
        }}
      >
        <Button title="Contact" />
      </Link>
    </section>
  );
};

export default Testimonial;
