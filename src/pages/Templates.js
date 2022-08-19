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
  {
    id: 3,
    path: "/templates/template-three",
  },
  {
    id: 4,
    path: "/templates/template-four",
  },
];

const Templates = ({ setIsLoading }) => {
  return (
    <React.Fragment>
      <section className={classes.templates}>
        <h1 className="infoTitle">See some examples</h1>
        <p>
          The design of these templatesa are fully customizable. These templates
          don't have functionality they're just for looks.
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
