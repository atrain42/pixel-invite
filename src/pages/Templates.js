import React from "react";

import classes from "./Templates.module.css";
import LiveSite from "../components/LiveSite/LiveSite";
import SingleTemplate from "../components/SingleTemplate";
import Footer from "../layout/Footer";

const templates = [
  {
    id: 1,
    path: "/templates/template-one",
  },
  {
    id: 2,
    path: "/templates/template-two",
  },
];

const Templates = () => {
  return (
    <React.Fragment>
      <section className={classes.templates}>
        <h1 className="infoTitle">See some examples</h1>
        <p>
          Take a look at a few templates to give you an idea of the
          possibilities. Remember the design is up to you and is fully
          customizable.
        </p>
        <div className={classes.templateContainer}>
          {templates.map((template) => {
            return <SingleTemplate key={template.id} {...template} />;
          })}
        </div>
        <LiveSite />
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Templates;
