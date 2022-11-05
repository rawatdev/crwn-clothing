import { useContext } from "react"

import { CartContext } from "../../contexts/cart.context"
import CheckoutItem from "../../components/checkout-item/checkout-item.component"

import * as S from "./checkout.styles"

const headerSections = ["Product", "Description", "Quantity", "Price", "Remove"]

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext)

  return (
    <S.CheckoutContainer>
      <S.CheckoutHeader>
        {headerSections.map((headerSection) => (
          <S.HeaderBlock key={headerSection}>
            <span>{headerSection}</span>
          </S.HeaderBlock>
        ))}
      </S.CheckoutHeader>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <S.Total className="total">Total: ${cartTotal}</S.Total>
    </S.CheckoutContainer>
  )
}

export default Checkout
