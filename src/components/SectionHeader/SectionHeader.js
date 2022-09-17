import { useRef } from "react";
import { useInView } from "framer-motion";

//styles
import "./SectionHeader.css";

const SectionHeader = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="section-heading" ref={ref}>
      <div
        className="linebreak"
        style={{
          transform: isInView ? "none" : "translateX(-40px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
      ></div>
      <img
        src={props.src}
        alt={props.alt}
        style={{
          transform: isInView ? "none" : "translateY(40px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
      />
      <div
        className="linebreak"
        style={{
          transform: isInView ? "none" : "translateX(40px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
      ></div>
    </div>
  );
};

export default SectionHeader;
