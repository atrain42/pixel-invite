import { useRef } from "react";
import { useInView } from "framer-motion";

//images
import paint from "../images/paint.png";
import SectionHeader from "../components/sectionHeader/SectionHeader";

//styles
import classes from "./Mission.module.css";

const Mission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animation = (duration, delay) => {
    return {
      opacity: isInView ? 1 : 0,
      transition: `opacity ${duration} ease-in ${delay}`,
    }
  }

  return (
    <section className={classes.mission}>
      <div ref={ref}>
        <SectionHeader
          subtitle='FOR YOU'
          title='Our Mission'
          text='
            At Pixel Invite, we create elegant web designs that help advertise
            your baby shower. Planning a baby shower is hard, let us worry about
            the invitations.
          '
        />
      </div>
      <img
        src={paint}
        alt='paint graphic'
        style={{
          opacity: isInView ? 1 : 0,
          transition: 'all 0.75s ease-in 1.25s',
        }}
      />
    </section>
  )
};

export default Mission;
