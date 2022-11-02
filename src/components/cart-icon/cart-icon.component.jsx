import { useContext } from "react"

import { CartContext } from "../../contexts/cart.context"

import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg"
import "./cart-icon.styles.scss"

const CartIcon = () => {
  const { setIsCartOpen } = useContext(CartContext)

  const toggleIsCartOpen = () => {
    setIsCartOpen((isOpen) => !isOpen)
  }

  return (
    <div onClick={toggleIsCartOpen} className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  )
}

export default CartIcon