import { useState } from "react";
import PLANTS from "./data.js";
import CartItem from "./components/CartItem/CartItem.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Plants from "./components/Plants/Plants.jsx";
import Plant from "./components/Plants/Plant.jsx";

export default function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (plant) => {
    const itemExists = cart.find((cartItem) => cartItem.id === plant.id);
    if (itemExists) {
      const newCartArray = cart.map((cartItem) =>
        cartItem.id === plant.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(newCartArray);
    } else {
      const newCartArray = [...cart, { ...plant, quantity: 1 }];
      setCart(newCartArray);
    }
  };

  const removeFromCart = (plant) => {
    const newCartArray = cart
      .map((cartItem) =>
        cartItem.id === plant.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
      .filter((cartItem) => cartItem.quantity > 0);
    setCart(newCartArray);
  };
  return (
    <>
      <main>
        <Plants plants={PLANTS} addToCart={addToCart} />
        <Cart
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </main>
    </>
  );
}
