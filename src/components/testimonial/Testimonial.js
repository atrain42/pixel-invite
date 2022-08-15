import Button from "../../components/button/Button";

import classes from "./Testimonial.module.css";

const Testimonial = () => {
  return (
    <section className={classes.testimonialSection}>
      <p>
        "I think [Pixel Invite] is a great idea. For my shower, I had to hand
        write every invitation and figure out each guest's address. It would
        have been way easier to send my guests a link to a website that contains
        all the information on the shower."
      </p>
      <h4>- Sarah S, mother of three</h4>
      <Button title="Get in touch" />
    </section>
  );
};

export default Testimonial;
