import { useSelector } from "react-redux";
import Product from "./Product";

const ProductList = () => {
  const { products } = useSelector((state) => state);

  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
      {products.length > 0 &&
        products.map((item) => <Product key={item.id} item={item} />)}
    </div>
  );
};

export default ProductList;
