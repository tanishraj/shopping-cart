import { useNavigate } from "react-router-dom";
import { Button } from "../../base/Button";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import "./AmountToPay.scss";

export const AmountToPay = ({ subtotal, vatAmount, totalCost }) => {
  const navigate = useNavigate();

  const handleBuyNow = async () => {
    const response = await fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "I am in love with someone.",
        userId: 5,
      }),
    });
    const data = await response.json();
    console.log("API POST METHOD RESPONSE", data);
    navigate("/success");
  };

  return (
    <table className="amount-to-pay-container">
      <tbody>
        <tr>
          <td colSpan={3}>Subtotal</td>
          <td data-label="Subtotal">£{subtotal}</td>
        </tr>
        <tr>
          <td colSpan={3}>VAT @ 20%</td>
          <td data-label="VAT @ 20%">£{vatAmount}</td>
        </tr>
        <tr className="total-cost">
          <td colSpan={3}>Total Cost</td>
          <td data-label="Total Cost">£{totalCost}</td>
        </tr>
        <tr>
          <td colSpan={3}></td>
          <td>
            <div className="button-container">
              <Button className="buy-now" onClick={handleBuyNow}>
                <span>Buy Now</span> <MdKeyboardDoubleArrowRight />
              </Button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
