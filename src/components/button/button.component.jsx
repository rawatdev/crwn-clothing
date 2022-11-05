import * as S from "./button.styles"

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {
  return {
    [BUTTON_TYPE_CLASSES.base]: S.BaseButton,
    [BUTTON_TYPE_CLASSES.google]: S.GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: S.InvertedButton,
  }[buttonType]
}

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType)

  return <CustomButton {...otherProps}>{children}</CustomButton>
}

export default Button
