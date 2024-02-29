import { useState, useEffect, useCallback } from "react";
import { Context } from "./context";
import { productsInCart } from "../utils/constants";

export const AppContext = ({ children }) => {
  const [productList, setProductList] = useState([...productsInCart]);
  const [subtotal, setSubtotal] = useState(0);
  const [vatAmount, setVatAmount] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const calculateSubtotal = useCallback(() => {
    const subtotalAmount = productList.reduce((acc, item) => {
      return acc + item.cost;
    }, 0);
    setSubtotal(subtotalAmount);
  }, [productList]);

  const calculateVatAmount = useCallback(() => {
    setVatAmount(subtotal * 0.2);
  }, [subtotal]);

  const calculateTotalCost = useCallback(() => {
    setTotalCost(subtotal + vatAmount);
  }, [subtotal, vatAmount]);

  const handleCartProducts = useCallback(
    (product, quantity) => {
      let products = [...productList];
      let index = products?.findIndex((p) => p.id === product?.id);
      products[index].quantity = quantity;
      products[index].cost = products[index].quantity * products[index].price;
      setProductList(products);
    },
    [productList]
  );

  const handleRemoveFromCart = (product) => {
    let items = [...productList];
    items = items?.filter((p) => p.id !== product?.id);
    setProductList(items);
  };

  useEffect(() => {
    calculateSubtotal();
  }, [productList, calculateSubtotal]);

  useEffect(() => {
    calculateVatAmount();
  }, [subtotal, calculateVatAmount]);

  useEffect(() => {
    calculateTotalCost();
  }, [subtotal, vatAmount, calculateTotalCost]);

  return (
    <Context.Provider
      value={{
        productList,
        setProductList,
        subtotal,
        vatAmount,
        totalCost,
        handleRemoveFromCart,
        handleCartProducts,
      }}
    >
      {children}
    </Context.Provider>
  );
};
