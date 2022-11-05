import { useContext } from "react"

import { CartContext } from "../../contexts/cart.context"
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"

import * as S from "./product-card.styles"

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product

  const { addItemToCart } = useContext(CartContext)

  const handleAddToCart = () => {
    addItemToCart(product)
  }

  return (
    <S.ProductCartContainer>
      <img src={imageUrl} alt={name} />

      <S.Footer>
        <S.Name className="name">{name}</S.Name>
        <S.Price className="price">${price}</S.Price>
      </S.Footer>

      <Button
        onClick={handleAddToCart}
        buttonType={BUTTON_TYPE_CLASSES.inverted}
      >
        Add to Cart
      </Button>
    </S.ProductCartContainer>
  )
}

export default ProductCard
