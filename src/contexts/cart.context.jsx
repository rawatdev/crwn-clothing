import { useState, useEffect, createContext } from "react"

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  setCartItems: () => {},
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const value = { cartItems, setCartItems, isCartOpen, setIsCartOpen }

  useEffect(() => {}, [])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
