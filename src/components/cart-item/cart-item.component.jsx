import * as S from "./cart-item.styles"

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem

  return (
    <S.CartItemContainer>
      <img src={imageUrl} alt={name} />
      <S.ItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </S.ItemDetails>
    </S.CartItemContainer>
  )
}

export default CartItem
