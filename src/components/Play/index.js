import Popup from 'reactjs-popup'

import {Link} from 'react-router-dom'

import {RiCloseLine} from 'react-icons/ri'

import {
  PlayContainer,
  CoinContainer,
  CoinBtn,
  Img,
  TotalContainer,
  RulesImg,
} from './styledComponents'

import './index.css'

const Play = props => {
  const {setMyChoice} = props

  const setChoice = event => {
    setMyChoice(event.target.value)
  }

  return (
    <PlayContainer>
      <Link to="/game">
        <CoinContainer>
          <CoinBtn onClick={setChoice} data-testid="rock">
            <Img
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
              alt="scissors"
            />
          </CoinBtn>
        </CoinContainer>
      </Link>
      <Link to="/game">
        <CoinContainer>
          <CoinBtn onClick={setChoice} data-testid="paper">
            <Img
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png"
              alt="paper"
            />
          </CoinBtn>
        </CoinContainer>
      </Link>
      <Link to="/game">
        <CoinContainer down>
          <CoinBtn onClick={setChoice} data-testid="scissors">
            <Img
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
              alt="scissors"
            />
          </CoinBtn>
        </CoinContainer>
      </Link>
      <Popup
        modal
        trigger={
          <button className="trigger-button" type="button">
            Rules
          </button>
        }
        className="popup-container"
      >
        {close => (
          <TotalContainer>
            <RiCloseLine onClick={() => close()} className="close-btn" />
            <RulesImg
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </TotalContainer>
        )}
      </Popup>
    </PlayContainer>
  )
}

export default Play
