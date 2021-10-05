import {HeaderContainer, Text, Head, ScoreContainer} from './styledComponents'

const Header = props => {
  const {score} = props

  return (
    <HeaderContainer>
      <Text>
        <Head>ROCK</Head>
        <Head>PAPER</Head>
        <Head>SCISSORS</Head>
      </Text>
      <ScoreContainer>
        <Head>Score</Head>
        <Head>{score}</Head>
      </ScoreContainer>
    </HeaderContainer>
  )
}

export default Header
