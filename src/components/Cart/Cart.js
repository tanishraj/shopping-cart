import { useContext } from "react";
import { Text } from "../base/Text";
import { ProductList } from "./ProductList/ProductList";
import { AmountToPay } from "./AmountToPay/AmountToPay";
import { Context } from "../../context/context";
import "./Cart.scss";

export const Cart = () => {
  const { productList, subtotal, vatAmount, totalCost } = useContext(Context);

  return (
    <div className="cart-container">
      <Text type="h1" className="title">
        Your Basket
      </Text>
      <Text className="description">
        Items you have added to your basket are shown below.
      </Text>
      <Text className="description">
        Adjust the quantities or remove items before continuing your purchase.
      </Text>
      {productList.length ? (
        <>
          <ProductList products={productList} />
          <AmountToPay
            subtotal={subtotal}
            vatAmount={vatAmount}
            totalCost={totalCost}
          />
        </>
      ) : (
        <Text type="h3" className="empty-cart">
          No items in your basket.
        </Text>
      )}
    </div>
  );
};
