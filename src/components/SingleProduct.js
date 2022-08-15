import data from "../ProductData";

const SingleProduct = (props) => {
  const { title, id } = data;
  return (
    <div>
      <h1>{title}</h1>
      <h1>{id}</h1>
    </div>
  );
};

export default SingleProduct;
