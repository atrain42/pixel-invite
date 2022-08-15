import { useEffect, useState } from "react";
import classes from "./Header.module.css";
import Button from "./Button";
import Contact from "./Contact";
import Loader from "../components/Loader";

const Header = function () {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 750);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className={classes.header}>
      <div className={classes.headerText}>
        <h1>Join us for a baby shower</h1>
        <h1>hosted by Mikayla and Mike</h1>
        <p>
          Sunday, Nov 16, 2022 at 12:30pm <br /> 8 Orange St. <br /> Lebanon, PA
          17042
        </p>
      </div>
      <div className={classes.btnContainer}>
        <Button
          title="Registry"
          source="https://www.amazon.com/baby-reg/example-registry-august-2022-linden/GT9KGEO73BXH"
        />
        <Contact destination="/template/contact" title="RSVP" />
      </div>
    </section>
  );
};

export default Header;
