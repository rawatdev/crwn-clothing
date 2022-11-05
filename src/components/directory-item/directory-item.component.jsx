import { useNavigate } from "react-router-dom"

import * as S from "./directory-items.styles"

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category
  const navigate = useNavigate()

  const onNavigateHandler = () => {
    navigate(route)
  }

  return (
    <S.DirectoryItemContainer onClick={onNavigateHandler}>
      <S.BackgroundImage className="background-image" imageUrl={imageUrl} />
      <S.Body className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </S.Body>
    </S.DirectoryItemContainer>
  )
}

export default DirectoryItem
