import React from "react";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

function Cart({ cart, addToCart, removeFromCart }) {
  return (
    <section className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((plant) => (
          <CartItem
            item={plant}
            key={plant.id}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </ul>
    </section>
  );
}

export default Cart;
