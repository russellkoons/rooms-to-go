import React from "react"

import SEO from "../components/seo"
import ProductItem from "../components/product/product-item"

const Cart = props => {
  let sub = 0;
  let qty = 0;

  // Sets the price and quantity based on props
  props.cart.map(product => {
    sub += (product.price * product.qty);
    qty += product.qty;
    return 1;
  });

  // Gets tax, shipping and total using equations with sub and qty
  const tax = (sub * 0.1).toFixed(2);
  const shipping = ((50 + (sub * 0.02)) - (5 * qty)).toFixed(2);
  const total = sub + parseInt(tax) + parseInt(shipping);

  if (props.cart.length === 0) {
    return (
      <>
        <SEO title="Cart" />
        <h1>Cart</h1>
        <p>There's nothing here...</p>
      </>
    )
  }

  return (
    <>
      <SEO title="Cart" />
      <h1>Cart</h1>
      <div className="product-list grid-x grid-margin-y">
        { props.cart.map((product, index) => (
          <ProductItem product={ product } {...props} key={ product.sku } btn="cart" index={index} />
        )) }
      </div>
      <div className="cost">
        <div className="subtotal">Subtotal: <strong>${sub.toFixed(2)}</strong></div>
        <div className="tax">Taxes: <strong>${tax}</strong></div>
        <div className="shipping">Shipping: <strong>${shipping}</strong></div>
        <div className="total">Total: <strong>${total.toFixed(2)}</strong></div>
      </div>
    </>
)
}

export default Cart
