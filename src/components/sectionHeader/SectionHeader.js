import { useRef } from 'react'
import { useInView } from 'framer-motion'

import classes from './SectionHeader.module.css'

export default function SectionHeader({ title, subtitle, text }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.75 })

  const animation = (duration, delay) => {
    return {
      opacity: isInView ? 1 : 0,
      transition: `all ${duration} ease-in ${delay}`,
    }
  }

  return (
    <div className={classes.container} ref={ref}>
      <span
        className={classes.subtitle}
        style={animation('0.5s', '0s')}
      >
        {subtitle}
      </span>
      <h1
        className={classes.title}
        style={animation('0.5s', '0.25s')}
      >
        {title}
      </h1>
      <p
        className={classes.text}
        style={animation('0.5s', '0.5s')}
      >
        {text}
      </p>
    </div>
  )
}
