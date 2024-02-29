import { ProductItem } from "../ProductItem/ProductItem";
import "./ProductList.scss";

export const ProductList = ({ products, handleCartProductQuantity }) => {
  return (
    <table className="product-list-container">
      <thead>
        <tr>
          <th scope="col">Product</th>
          <th scope="col">Price</th>
          <th scope="col">Qty</th>
          <th scope="col">Cost</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductItem product={product} key={product?.id} />
        ))}
      </tbody>
    </table>
  );
};
