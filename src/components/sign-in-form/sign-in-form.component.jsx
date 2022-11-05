import { useState } from "react"

import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils"
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"
import FormInput from "../form-input/form-input.component"
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils"

import * as S from "./sign-in-form.styles"

const defaultFormFields = {
  email: "",
  password: "",
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!email || !password) {
      console.log("provide email and password")
      return
    }

    try {
      await signInAuthUserWithEmailAndPassword(email, password)
      resetFormFields()
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("incorrect password for email")
          break
        case "auth/user-not-found":
          alert("no user associated with this email")
          break
        default:
          console.log(err)
      }
    }
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup()
  }

  return (
    <S.SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          name="email"
          onChange={handleChange}
          value={email}
          type="email"
          required
        />

        <FormInput
          label="password"
          name="password"
          onChange={handleChange}
          value={password}
          type="password"
          required
        />

        <S.ButtonsContainer>
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            onClick={signInWithGoogle}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Google Sign in
          </Button>
        </S.ButtonsContainer>
      </form>
    </S.SignInContainer>
  )
}

export default SignInForm
