import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProductItem from "./product-item"
import "../../assets/css/components/product/product-list.css"

const ProductList = props => {
  const { allDataJson } = useStaticQuery(
    graphql`
      query {
        allDataJson {
          edges {
            node {
              products {
                sku
                title
                price
                image
                qty
              }
            }
          }
        }
      }
    `
  )

  return(
    <div className="product-list grid-x grid-margin-y">
      { allDataJson.edges[0].node.products.map(product => (
        <ProductItem product={ product } {...props} key={ product.sku } btn="add" />
      )) }
    </div>
  )
}
export default ProductList
