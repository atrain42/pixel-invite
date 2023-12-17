import { Link } from 'react-router-dom'

import Button from '../components/button/Button'

import classes from './GetStarted.module.css'

import balloons from '../images/balloons-PI.png'

export default function GetStarted() {
  return (
    <section className={classes.callToAction}>
      <img
        src={balloons}
        alt='happy balloons'
      ></img>
      <h1 className={classes.infoTitle}>Ready to get started?</h1>
      <p>Fill out the contact form and we will reply within 24 hours.</p>
      <Link to='/contact'>
        <button className={classes.ctaBtn}>Get started</button>
      </Link>
    </section>
  )
}
