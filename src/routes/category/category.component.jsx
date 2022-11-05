import { useContext, useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { CategoriesContext } from "../../contexts/categories.context"
import ProductCard from "../../components/product-card/product-card.component"

import "./category.styles.scss"

const Category = () => {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
  const [products, setProducts] = useState([])

  console.log(products)

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  if (!products) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default Category