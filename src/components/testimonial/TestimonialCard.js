import React from 'react'

//styles
import classes from "./Testimonial.module.css";

//SVG
import image from '../../images/quotes.svg'

export default function TestimonialCard({text, name}) {
  return (
    <div className={classes.testimonialCard}>
      <img src={image} alt="Quotes icon"/>
      <p>{text}</p>
      <div className={classes.testimonialCardLine}></div>
      <span>{name}</span>
    </div>
  )
}
