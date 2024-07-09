import { useState } from "react";

function UpdateObejcts() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    // update the price

    // OPTION 1
    //     const newDrink = {
    //       //title: drink.title,
    //       ...drink, // spread operator - copies all the properties in the drink object
    //       price: 6,
    //     };
    //     setDrink(newDrink);

    // OPTION 2
    setDrink({ ...drink, price: 6 });
  };

  return (
    <div>
      {drink.title} - {drink.price}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default UpdateObejcts;
