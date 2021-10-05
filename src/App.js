import './App.css'
import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import Header from './components/Header'
import Play from './components/Play'
import Game from './components/Game'

class App extends Component {
  state = {
    myChoice: '',
    setMyChoice: '',
    score: 0,
  }

  render() {
    const {myChoice, setMyChoice, score} = this.state

    return (
      <>
        <Header score={score} />
        <Switch>
          <Route exact path="/">
            <Play setMyChoice={setMyChoice} />
          </Route>
          <Route exact path="/game">
            <Game myChoice={myChoice} />
          </Route>
        </Switch>
      </>
    )
  }
}
export default App
