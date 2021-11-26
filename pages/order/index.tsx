import { useContext } from "react";
import { GlobalContext } from "../../contexts/globalContext";

const Order = () => {
  const [pizza] = useContext(GlobalContext);

  return (
    <div className="container order">
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map((topping) => (
        <div key={topping}>{topping}</div>
      ))}
    </div>
  );
};

export default Order;
