import * as S from "./form-input.styles"

const FormInput = ({ label, ...otherProps }) => {
  return (
    <S.Group>
      <S.FormInput className="form-input" {...otherProps} />
      {label && (
        <S.FormInputLabel shrink={otherProps.value.length}>
          {label}
        </S.FormInputLabel>
      )}
    </S.Group>
  )
}

export default FormInput
