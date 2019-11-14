import React from "react"

import SEO from "../components/seo"
import ProductItem from "../components/product/product-item"

const Cart = props => {
  if (props.cart === []) {
    return (
      <>
        <SEO title="Cart" />
        <h1>Cart</h1>
      </>
    )
  }

  return (
    <>
      <SEO title="Cart" />
      <h1>Cart</h1>
      <div className="product-list grid-x grid-margin-y">
        { props.cart.map((product, index) => (
          <ProductItem product={ product } cart={ props.cart } setCart={ props.setCart } key={ product.sku } btn="cart" index={index} />
        )) }
      </div>
    </>
)
}

export default Cart
