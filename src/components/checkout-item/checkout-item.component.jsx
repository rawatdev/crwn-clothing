import { useContext } from "react"

import { CartContext } from "../../contexts/cart.context"

import * as S from "./checkout-item.styles"

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem

  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext)

  const clearItemHandler = () => {
    clearItemFromCart(cartItem)
  }

  const addItemHandler = () => {
    addItemToCart(cartItem)
  }

  const removeItemHandler = () => {
    removeItemFromCart(cartItem)
  }

  return (
    <S.CheckoutItemContainer>
      <S.ImageContainer>
        <img src={imageUrl} alt={name} />
      </S.ImageContainer>

      <S.BaseSpan className="name">{name}</S.BaseSpan>

      <S.Quantity className="quantity">
        <S.Arrow onClick={removeItemHandler}>&#10094;</S.Arrow>
        <S.Value className="value">{quantity}</S.Value>
        <S.Arrow onClick={addItemHandler}>&#10095;</S.Arrow>
      </S.Quantity>

      <S.BaseSpan className="price">{price}</S.BaseSpan>
      <S.RemoveButton onClick={clearItemHandler}>&#10005;</S.RemoveButton>
    </S.CheckoutItemContainer>
  )
}

export default CheckoutItem
