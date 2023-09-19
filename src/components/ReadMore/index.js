import {useState} from 'react'
import {
  Container,
  Header,
  Paragraph,
  CustomImage,
  CustomButton,
  Description,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [readMore, setReadMore] = useState(false)

  const clickedButton = () => {
    console.log('clicked')
    setReadMore(prevState => !prevState)
  }

  console.log(readMore)

  const description =
    readMore === true
      ? reactHooksDescription
      : reactHooksDescription.slice(0, 170)

  const buttonText = readMore === true ? 'Read Less' : 'Read More'

  console.log(readMore)

  return (
    <Container>
      <Header>React Hooks</Header>
      <Paragraph>Hooks are a new addition to React</Paragraph>
      <CustomImage
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Description>{description}</Description>
      <CustomButton onClick={clickedButton}>{buttonText}</CustomButton>
    </Container>
  )
}

export default ReadMore
