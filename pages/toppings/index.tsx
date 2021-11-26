import { NextPage } from "next";
import Link from "next/link";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/globalContext";

const Toppings: NextPage = () => {
  const toppings: string[] = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes"
  ];

  const [pizza, setPizza] = useContext(GlobalContext);

  const addTopping = (topping: string) => {
    let newToppings: string[] = [];
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <div className="toppings container">
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <li key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{topping}</span>
            </li>
          );
        })}
      </ul>

      <Link href="/order" passHref>
        <button>Order</button>
      </Link>
    </div>
  );
};

export default Toppings;
