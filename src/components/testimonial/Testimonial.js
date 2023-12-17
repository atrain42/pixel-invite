import { useRef } from "react";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";

// Components
import Button from "../../components/button/Button";
import SectionHeader from '../../components/sectionHeader/SectionHeader'
import TestimonialCard from './TestimonialCard'

// Styles
import classes from "./Testimonial.module.css";

const testimonials = [
  {
    text: 'Thanks so much again!! I’ll be telling everyone I know about this - it’s such a great idea. The process was so easy!!! It’s PERFECT thank you so much omg!!',
    name: 'Kayleigh Y.',
  },
  {
    text: 'I absolutely love my site!!! They were in contact with me every step of the way, and answered any questions I had. I HIGHLY recommend!!!',
    name: 'Claudia B.',
  },
  {
    text: 'I can’t thank [Pixel Invite] enough. My website looked awesome, and it was so easy for my guests to RSVP! I’m so glad I chose them!',
    name: 'Danielle R.',
  },
]

const Testimonial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={classes.testimonialSection} ref={ref}>
      <SectionHeader
        subtitle='SATISFIED CUSTOMERS'
        title='Testimonials'
        text="We know we're great, but don't take our word for it. Check out some reviews from happy customers."
      />
      <p
        className={classes.largeTestimonial}
        style={{
          opacity: isInView ? 1 : 0,
          transition: 'all 1s ease-in',
        }}
      >
        "I think [Pixel Invite] is a great idea. For my shower, I had to hand
        write every invitation and figure out each guest's address. It would
        have been way easier to send my guests a link to a website that contains
        all the information on the shower."
      </p>
      <h4>- Sarah S, new mother</h4>
      <Link to='/contact'>
        <button className={classes.testimonialBtn}>Get started</button>
      </Link>
      <div className={classes.testimonialCardContainer}>
        {testimonials.map((testimonial, index) => {
          return <TestimonialCard key={index} {...testimonial} />
        })}
      </div>
    </section>
  )
};

export default Testimonial;
