import SingleAlert from "./SingleAlert";

import classes from "./Alerts.module.css";
import img1 from "../../images/info1.svg";
import img2 from "../../images/new1.svg";
import img3 from "../../images/new2.svg";

const alerts = [
  {
    id: 1,
    title: "Custom invitations",
    info: "All of our websites we create are custom and tailored to the customers needs and wants. When building your site, we are in constant contact with you so just let us know what info you want on your site!",
    img: img3,
  },
  {
    id: 2,
    title: "Password protected sites",
    info: "We expect your website to contain private information like addresses, dates, etc. This is why all sites we create are password protected. Simply inform your guests of the password, and they will gain access to the site.",
    img: img2,
  },
  {
    id: 3,
    title: "Browse our templates",
    info: "Take a look at some example websites that we have built to get an idea of the different routes we can take when creating your site. Also, you have the chance to see a completed site with password protection and a functional contact form.",
    img: img1,
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
