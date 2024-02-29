import { useContext } from "react";
import { ProductQty } from "../ProductQty/ProductQty";
import { Button } from "../../base/Button";
import { FaTrashAlt } from "react-icons/fa";
import { Context } from "../../../context/context";
import "./ProductItem.scss";

export const ProductItem = ({ product }) => {
  const { handleRemoveFromCart } = useContext(Context);
  return (
    <tr>
      <td data-label="Product">{product?.name}</td>
      <td data-label="Price">£{product?.price}</td>
      <td data-label="Qty">
        <ProductQty product={product} />
      </td>
      <td data-label="Cost">
        <span>£{product?.cost} </span>
        <Button
          className="remove-button"
          aria-label="remove product from cart"
          onClick={() => handleRemoveFromCart(product)}
        >
          <FaTrashAlt className="icon" size={20} />
        </Button>
      </td>
    </tr>
  );
};
