import styled from 'styled-components'

export const PlayContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px;
`
export const CoinContainer = styled.div`
  margin: 40px;
  margin-left: ${props => (props.down ? '200px' : '50px')};
  border-radius: 55px;
`
export const CoinBtn = styled.btn`
  margin: 5px;
`
export const Img = styled.img`
  height: 150px;
  width: 150px;
  @media screen and (min-width: 700px) {
    height: 280px;
    width: 280px;
  }
`
export const TotalContainer = styled.div`
  border: 10px #ffffff;
  border-radius: 20px;
`
export const RulesImg = styled.img`
  height: 300px;
  width: 300px;
  margin: 10px;
  background-size: cover;
`
