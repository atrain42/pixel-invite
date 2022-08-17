import classes from "./Templates.module.css";

// import img1 from "../images/exampleA.png";
// import img2 from "../images/exampleB.png";

import SingleTemplate from "../components/SingleTemplate";

const templates = [
  {
    id: 1,
    path: "/template-one",
  },
  {
    id: 2,
    path: "/template-two",
  },
];

const Templates = () => {
  return (
    <section className={classes.templates}>
      <h1 className="infoTitle">See some examples</h1>
      <div className={classes.templateContainer}>
        {templates.map((template) => {
          return <SingleTemplate key={template.id} {...template} />;
        })}
      </div>
    </section>
  );
};

export default Templates;
