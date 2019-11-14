import React from "react"

import SEO from "../components/seo"
import ProductList from "../components/product/product-list"

const IndexPage = props => (
  <>
    <SEO title="Products" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Products</h1>
    <ProductList cart={ props.cart } setCart={ props.setCart }/>
  </>
)

export default IndexPage
