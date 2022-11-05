import { useContext, useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { CategoriesContext } from "../../contexts/categories.context"
import ProductCard from "../../components/product-card/product-card.component"

import * as S from "./category.styles"

const Category = () => {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  if (!products) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <S.CategoryTitle>{category.toUpperCase()}</S.CategoryTitle>

      <S.CategoryContainer>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </S.CategoryContainer>
    </>
  )
}

export default Category
