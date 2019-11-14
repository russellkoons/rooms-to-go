import React from "react"
import renderer from "react-test-renderer"

import Cart from "../../pages/cart"

describe("Cart", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Cart cart={[]} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})