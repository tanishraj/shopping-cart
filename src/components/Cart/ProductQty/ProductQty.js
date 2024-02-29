import { useContext } from "react";
import { Button } from "../../base/Button";
import { TextInput } from "../../base/TextInput";
import { Context } from "../../../context/context";
import "./ProductQty.scss";

export const ProductQty = ({ product }) => {
  const { handleCartProductQuantity } = useContext(Context);

  return (
    <div className="quantity-container">
      <TextInput
        className="input-container"
        value={product?.quantity}
        placeholder="quantity"
        disabled={true}
      />
      <div className="button-container">
        <Button onClick={() => handleCartProductQuantity("increment", product)}>
          +
        </Button>
        <Button onClick={() => handleCartProductQuantity("decrement", product)}>
          -
        </Button>
      </div>
    </div>
  );
};
