//components
import SingleAlert from "./SingleAlert";

//styles
import classes from "./Alerts.module.css";

//images
import img1 from "../../images/info1.svg";
import img2 from "../../images/new1.svg";
import img3 from "../../images/new2.svg";

const alerts = [
  {
    id: 1,
    title: "Custom invitations",
    info: "All of the websites that we create are custom and tailored to your needs. When building your site, we will keep in touch with you to ensure that your site is satisfies your needs. All of the templates can be customized, just specify any changes you want, and we will incorporate it into your site!",
    img: img3,
  },
  {
    id: 2,
    title: "Password protected option",
    info: "We give you the opportunity to password protect your website. We know you may have private information like names and addresses, we can add authentication to prevent unwanted users from seeing your baby shower information. Just provide your guests with the password to your site, and they will be able to gain access to it.",
    img: img2,
  },
  {
    id: 3,
    title: "Browse our templates",
    info: "Take a look at some example websites that we have built to get an idea of the different routes we can take when creating your site. All sections of the templates can be customized to fit your needs including the quotes, pictures, texts, etc.",
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
