import {Component} from 'react'

import {Link} from 'react-router-dom'

import {GameResultContainer, PlayAgainBtn, Result} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    image:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    image:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    image:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const rock = choicesList[0].id
const scissors = choicesList[1].id
const paper = choicesList[2].id

class Game extends Component {
  state = {
    score: 0,
    myChoice: '',
    systemChoice: '',
    playerWin: false,
    setPlayerWin: '',
  }

  componentDidMount = () => {
    setSystemChoice()
  }

  setSystemChoice = () => {
    this.setState({
      systemChoice: choicesList[Math.floor(Math.random() * 3)],
    })
  }

  componentWillMount = () => {
    result()
  }

  result = () => {
    const {myChoice, systemChoice, setPlayerWin} = this.state

    if (myChoice === rock && systemChoice === scissors) {
      this.setState({setPlayerWin: 'win'})
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    } else if (myChoice === rock && systemChoice === paper) {
      this.setState({setPlayerWin: 'lose'})
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
    } else if (myChoice === scissors && systemChoice === paper) {
      this.setState({setPlayerWin: 'win'})
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    } else if (myChoice === paper && systemChoice === rock) {
      this.setState({setPlayerWin: 'win'})
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    } else if (myChoice === scissors && systemChoice === rock) {
      this.setState({setPlayerWin: 'lose'})
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
    } else if (myChoice === paper && systemChoice === scissors) {
      this.setState({setPlayerWin: 'lose'})
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
    } else {
      this.setState({setPlayerWin: 'draw'})
    }
  }

  render() {
    const {myChoice, playerWin} = this.state

    return (
      <>
        <Play setMyChoice={myChoice} />
        <GameResultContainer>
          {(playerWin = 'win' && <Result>YOU WIN</Result>)}
          {(playerWin = 'lose' && <Result>YOU LOSE</Result>)}
          {(playerWin = 'draw' && <Result>IT'S DRAW</Result>)}

          <Link to="/">
            <PlayAgainBtn onClick={this.setSystemChoice}>
              Play Again
            </PlayAgainBtn>
          </Link>
        </GameResultContainer>
      </>
    )
  }
}

export default Game
