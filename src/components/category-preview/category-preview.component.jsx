import ProductCard from "../product-card/product-card.component"

import * as S from "./category-preview.styles"

const CategoryPreview = ({ title, products }) => {
  return (
    <S.CategoryPreviewContainer>
      <h2>
        <S.Title to={title}>{title.toUpperCase()}</S.Title>
      </h2>

      <S.Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </S.Preview>
    </S.CategoryPreviewContainer>
  )
}

export default CategoryPreview
