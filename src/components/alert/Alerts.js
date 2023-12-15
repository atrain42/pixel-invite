//components
import SingleAlert from "./SingleAlert";

//styles
import classes from "./Alerts.module.css";

//images
import img2 from "../../images/school-notes.png";
import img3 from '../../images/stacked-papers.png'

const alerts = [
  {
    id: 2,
    title: "Tailored to your needs",
    info: "Each site is tailored to suit your unique preferences. Simply share with us your photos, additional details, addresses, etc. and we'll seamlessly incorporate them into your personalized website.",
    img: img2,
    flexDirection: classes.alertContainer
  },
  {
    id: 3,
    title: "Browse our templates",
    info: "Visit the different templates to get an idea of which design you want to choose.",
    img: img3,
    flexDirection: classes.alertContainerReverse
  },
];

const Alerts = () => {
  return (
    <section className={classes.alert}>
      {alerts.map((alert) => {
        return <SingleAlert key={alert.id} {...alert} />;
      })}
    </section>
  );
};

export default Alerts;
