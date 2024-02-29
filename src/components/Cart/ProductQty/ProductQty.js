import { useContext, useEffect, useState } from "react";
import { Button } from "../../base/Button";
import { TextInput } from "../../base/TextInput";
import { Context } from "../../../context/context";
import { MIN_QUANTITY, MAX_QUANTITY } from "../../../utils/constants";
import "./ProductQty.scss";

export const ProductQty = ({ product }) => {
  const { handleCartProducts } = useContext(Context);
  const [quantity, setQuantity] = useState(product?.quantity);

  useEffect(() => {
    handleCartProducts(product, quantity);
  }, [quantity]);

  const updateProductQuantity = (type, value) => {
    if (type === "increment") {
      if (quantity === MAX_QUANTITY) return;
      setQuantity(quantity + 1);
    } else if (type === "decrement") {
      if (quantity === MIN_QUANTITY) return;
      setQuantity(quantity - 1);
    } else if (type === "inputChange") {
      if (/^[1-9]$|^10$/.test(value)) {
        setQuantity(value);
        return;
      }
      setQuantity("");
    }
  };

  return (
    <div className="quantity-container">
      <TextInput
        className="input-container"
        value={quantity}
        placeholder="quantity"
        onChange={(value) => updateProductQuantity("inputChange", value)}
      />
      <div className="button-container">
        <Button onClick={() => updateProductQuantity("increment")}>+</Button>
        <Button onClick={() => updateProductQuantity("decrement")}>-</Button>
      </div>
    </div>
  );
};
