//styles
import classes from './SingleTemplate.module.css'

const SingleTemplate = ({ path, bgid, title, number, info }) => {
  return (
    <div className={classes.singleTemplateContent}>
      <a href={path} className={classes.linkOverhang}>
        <div className={classes.imageContainer} id={bgid}></div>
      </a>
      <div className={classes.templateText}>
        <span>Model {number}</span>
        <h1>{title}</h1>
        <p>{info}</p>
        <a href={path}>
          <button className={classes.templateBtn}>Visit site</button>
        </a>
      </div>
    </div>
  )
}

export default SingleTemplate
