import React from "react"

// After passing down the setCart function I use the list items to update the state
const ProductItem = props => {
  const addItem = product => {
    // Checks if an item is already in the cart and returns if so
    if (props.cart.find(item => item.sku === product.sku)) {
      return;
    }
    props.setCart([...props.cart, product]);
  }

  const removeItem = index => {
    let cart = props.cart;
    cart.splice(index, 1);
    props.setCart([...cart]);
  }

  const updateItem = index => {
    let cart = props.cart;
    cart[index].qty = parseInt(document.getElementById("input-" + index).value);
    props.setCart([...cart]);
  }

  // Only appears if on the index page
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
      <div className="product-title cell small-3">{ props.product.title }</div>
      <div className="product-sku cell small-2">{ props.product.sku }</div>
      <div className="product-price cell small-2">${ props.product.price }</div>
      <div className="product-qty cell small-1">
        <input id={"input-" + props.index} type="number" min="1" max="10" defaultValue={ props.product.qty }></input>
      </div>
      <div className="product-add-to-cart cell small-1">
        <button id="update-price" onClick={() => updateItem(props.index)}> Update</button>
      </div>
      <div className="product-add-to-cart cell small-1">
        <button id="remove-item" onClick={() => removeItem(props.index)}> Remove</button>
      </div>
    </div>
  )
}

export default ProductItem