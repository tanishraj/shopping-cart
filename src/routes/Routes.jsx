import { Routes as Router, Route } from "react-router-dom";
import { Cart } from "../components/Cart/Cart";
import { Success } from "../components/Success/Success";

export const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Cart />} />
      <Route path="/success" element={<Success />} />
    </Router>
  );
};
