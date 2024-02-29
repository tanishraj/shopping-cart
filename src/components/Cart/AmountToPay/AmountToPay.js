import { Button } from "../../base/Button";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import "./AmountToPay.scss";

export const AmountToPay = ({ subtotal, vatAmount, totalCost }) => {
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
              <Button className="buy-now" onClick={() => {}}>
                <span>Buy Now</span> <MdKeyboardDoubleArrowRight />
              </Button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
