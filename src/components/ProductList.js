import data from "../ProductData";
import Product from "./Product";

const ProductList = () => {
  return (
    <section>
      <div>
        {data.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default ProductList;
