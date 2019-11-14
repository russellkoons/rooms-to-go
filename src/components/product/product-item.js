import React from "react"

const ProductItem = props => {
  const addItem = product => {
    props.cart(product);
    console.log('FUCK');
  }

  return (
    <div className="product cell small-12 grid-x grid-margin-x" id={ props.product.sku }>
      <div className="product-image cell small-2"><img src={ props.product.image } alt={ props.product.title } /></div>
      <div className="product-title cell small-4">{ props.product.title }</div>
      <div className="product-sku cell small-2">{ props.product.sku }</div>
      <div className="product-price cell small-2">${ props.product.price }</div>
      <div className="product-add-to-cart cell small-2">
          <button id="add-to-cart" onClick={() => addItem(props.product)}> Add to Cart</button>
      </div>
    </div>
  )

}

export default ProductItem