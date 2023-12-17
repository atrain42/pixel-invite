import { useRef } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";

//components
import Footer from "../../layout/Footer";

//styles
import "./Models.css";

const Models = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { title } = useParams();

  return (
    <AnimatePresence initial={true}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="model-overhang" ref={ref}>
          {data
            .filter((card) => card.title === title)
            .map((card, index) => (
              <div className="models">
                <a
                  href={card.path}
                  className="linkOverhang"
                  style={{
                    transform: isInView ? "none" : "translateY(30px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.5s ease-in",
                  }}
                >
                  <div className="imageContainer" id={card.bgid}></div>
                </a>
                <div className="models-text">
                  <h2
                    style={{
                      transform: isInView ? "none" : "translateX(30px)",
                      opacity: isInView ? 1 : 0,
                      transition: "all 1s ease-in 0.5s",
                    }}
                  >
                    Model {card.number}
                  </h2>
                  <h1
                    style={{
                      transform: isInView ? "none" : "translateX(20px)",
                      opacity: isInView ? 1 : 0,
                      transition: "all 1s ease-in 0.75s",
                    }}
                  >
                    {card.title}
                  </h1>
                  <p
                    style={{
                      transform: isInView ? "none" : "translateX(20px)",
                      opacity: isInView ? 1 : 0,
                      transition: "all 1s ease-in 1s",
                    }}
                  >
                    {card.info}
                  </p>
                  <a
                    href={card.path}
                    style={{
                      opacity: isInView ? 1 : 0,
                      transition: "all 1s ease-in 1.25s",
                    }}
                  >
                    View site &#8594;
                  </a>
                </div>
              </div>
            ))}
        </div>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Models;
