import SignUpForm from "../../components/sign-up-form/sign-up-form.component"
import SignInForm from "../../components/sign-in-form/sign-in-form.component"

import * as S from "./authentication.styles"

const Authentication = () => {
  return (
    <S.AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </S.AuthenticationContainer>
  )
}

export default Authentication
