import { Routes as Router, Route } from "react-router-dom";
import { Cart } from "../components/Cart/Cart";

export const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Cart />} />
    </Router>
  );
};
