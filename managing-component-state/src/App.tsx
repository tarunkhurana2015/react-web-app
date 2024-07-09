import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Message from "./strictMode";
import UpdateObejcts from "./updateObjects";
import UpdateNestedObjects from "./UpdateNestedObjects";
import UpdateArays from "./UpdateArrays";
import UpdateArayOfObjects from "./UpdateArrayOfObjects";
import UpdateUsingImmer from "./UpdateUsingImmer";
import NavBar from "./ShareStates/NavBar";
import Cart from "./ShareStates/Cart";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lasrName, setLastName] = useState("");
  // nested states
  const [person, setPerson] = useState({
    firstName: "tarun",
    lastName: "khurana",
  });

  const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);

  return (
    <>
      <div>
        {person.firstName} {person.lastName}
      </div>
      <Message />
      <Message />
      <Message />

      <UpdateObejcts />
      <UpdateNestedObjects />
      <UpdateArays />
      <UpdateArayOfObjects />
      <UpdateUsingImmer />

      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </>
  );
}

export default App;
