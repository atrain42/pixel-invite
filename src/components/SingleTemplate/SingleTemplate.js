import "./SingleTemplate.css";

const SingleTemplate = ({ source, title, text, path, bgImg }) => {
  return (
    <a href={path} className="linkOverhang">
      <div className="imageContainer">
        <div className="image">
          <img src={source} alt="template" />
        </div>
        <div className="link-text">
          <h1>{title}</h1>
          <p>{text}</p>
          <a href={path}>VISIT &#x2192;</a>
        </div>
        <img src={bgImg} alt="space" id="bg-img" />
      </div>
    </a>
  );
};

export default SingleTemplate;
