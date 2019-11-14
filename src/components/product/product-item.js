import React from "react"

const ProductItem = props => {
  const addItem = product => {
    if (props.cart.find(item => item === product)) {
      return;
    }
    props.setCart([...props.cart, product]);
  }

  const removeItem = index => {
    let cart = props.cart;
    cart.splice(index, 1);
    console.log(cart);
    props.setCart(cart);
  }

  if (props.btn === 'add') {
    return (
      <div className="product cell small-12 grid-x grid-margin-x" id={ props.product.sku } index={ props.index }>
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

  return (
    <div className="product cell small-12 grid-x grid-margin-x" id={ props.product.sku }>
      <div className="product-image cell small-2"><img src={ props.product.image } alt={ props.product.title } /></div>
      <div className="product-title cell small-4">{ props.product.title }</div>
      <div className="product-sku cell small-2">{ props.product.sku }</div>
      <div className="product-price cell small-2">${ props.product.price }</div>
      <div className="product-qty cell small-1">
        <input type="number" min="1" max="10" defaultValue="1"></input>
      </div>
      <div className="product-add-to-cart cell small-1">
        <button id="remove-item" onClick={() => removeItem(props.index)}> Remove</button>
      </div>
    </div>
  )
}

export default ProductItem