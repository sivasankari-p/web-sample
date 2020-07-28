import React from "react";
import {ICartItem} from "./cartTypes";
import CartItem from "./CartItem";
import "./cart.scss";

const cartItems: ICartItem[] = [
    {
        name: "Item 1",
        description: "Lorem Ipsum",
        quantity: 2,
        price: 9.90
    },
    {
        name: "Item 2",
        description: "Lorem Ipsum",
        quantity: 2,
        price: 19.90
    },
    {
        name: "Item 3",
        description: "Lorem Ipsum",
        quantity: 1,
        price: 4.90
    }
];

const CART_TITLE = "Cart";
const CART_TOTAL = "Total";
const CHECKOUT = "Checkout";

const Cart = (props: {}) => {
    return (
      <div className={"cart-container"}>
          <div className={"cart-title"}>
              {CART_TITLE}
          </div>
          <div className={"cart-items"}>
              {cartItems.map((cartItem: any) => (
                  <CartItem item={cartItem}/>
              ))}
          </div>
          <div className={"cart-title"}>
              {CART_TOTAL}
          </div>
          <div className={"cart-footer"}>
              {CHECKOUT}
          </div>
      </div>
    );
};

export default Cart;
