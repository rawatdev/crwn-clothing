import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import { CartContext } from "../../contexts/cart.context"
import Button from "../button/button.component"
import CartItem from "../cart-item/cart-item.component"

import * as S from "./cart-dropdown.styles"

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate("/checkout")
  }

  return (
    <S.CartDropdownContainer>
      <S.CartItems>
        {cartItems ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <S.EmptyMessage>Your cart is empty!</S.EmptyMessage>
        )}
      </S.CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </S.CartDropdownContainer>
  )
}

export default CartDropdown
