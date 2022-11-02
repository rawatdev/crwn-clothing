import { createContext, useState, useEffect } from "react"

import PRODUCTS from "../shop-data.json"

export const ProductsContext = createContext({
  products: [],
})

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  const value = { products }

  useEffect(() => {
    const fetchProducts = async () => {
      setProducts(PRODUCTS)
    }

    fetchProducts()
  }, [])

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}
