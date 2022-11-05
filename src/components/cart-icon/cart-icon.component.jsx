import { useContext } from "react"

import { CartContext } from "../../contexts/cart.context"

import * as S from "./cart-icon.styles"

const CartIcon = () => {
  const { setIsCartOpen, cartCount } = useContext(CartContext)

  const toggleIsCartOpen = () => {
    setIsCartOpen((isOpen) => !isOpen)
  }

  return (
    <S.CartIconContainer onClick={toggleIsCartOpen}>
      <S.ShoppingIcon />
      <S.ItemCount>{cartCount}</S.ItemCount>
    </S.CartIconContainer>
  )
}

export default CartIcon
