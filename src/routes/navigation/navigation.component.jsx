import { useContext } from "react"
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

import { selectCurrentUser } from "../../store/user/user.selector"
import { CartContext } from "../../contexts/cart.context"

import { signOutUser } from "../../utils/firebase/firebase.utils"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"

import { ReactComponent as CrwnLogo } from "../../assests/crown.svg"

import * as S from "./navigation.styles"

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const { isCartOpen } = useContext(CartContext)

  return (
    <>
      <S.NavigationContainer>
        <S.LogoContainer to="/">
          <CrwnLogo />
        </S.LogoContainer>

        <S.NavLinks>
          <S.NavLink to="/shop">SHOP</S.NavLink>
          {currentUser ? (
            <S.NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </S.NavLink>
          ) : (
            <S.NavLink to="/auth">SIGN IN</S.NavLink>
          )}

          <CartIcon />
        </S.NavLinks>

        {isCartOpen && <CartDropdown />}
      </S.NavigationContainer>

      <Outlet />
    </>
  )
}
export default Navigation
