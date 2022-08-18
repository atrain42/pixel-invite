import React, { useState } from "react";

import classes from "./Templates.module.css";
import LiveSite from "../components/LiveSite/LiveSite";
import SingleTemplate from "../components/SingleTemplate";
import Footer from "../layout/Footer";
import Loader from "../components/Loader";

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

const Templates = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <React.Fragment>
      <section className={classes.templates}>
        {isLoading && <Loader />}
        <h1 className="infoTitle">See some examples</h1>
        <p>
          Take a look at a few templates to give you an idea of the
          possibilities. Remember the design is up to you and is fully
          customizable.
        </p>
        <div className={classes.templateContainer}>
          {templates.map((template) => {
            return (
              <SingleTemplate
                key={template.id}
                {...template}
                setIsLoading={setIsLoading}
              />
            );
          })}
        </div>
        <LiveSite />
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Templates;
