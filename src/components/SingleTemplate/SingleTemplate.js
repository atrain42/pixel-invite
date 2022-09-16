import { Link } from "react-router-dom";

//styles
import "./SingleTemplate.css";

const SingleTemplate = ({ source, path, bgid, title }) => {
  return (
    <div className="single-template__content">
      <a href={path} className="linkOverhang">
        <div className="imageContainer" id={bgid}></div>
      </a>

      <Link to={`/model/${title}`} id="detail-link">
        More details
      </Link>
    </div>
  );
};

export default SingleTemplate;
