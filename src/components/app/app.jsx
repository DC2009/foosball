import './app.scss'
import React, { useState } from 'react'
import { Lobby } from '../lobby'
import { CreateGame, GameResult } from '../game'
import { Route, Switch } from 'react-router-dom'
import { useFetchJson } from '../../utils/fetch'
import { playersFilePath } from '../common/consts'
import { PlayerDetails } from '../player'
import { Context } from './context'

const App = () => {
  const [playersData, loading] = useFetchJson(playersFilePath)

  const [context, setContext] = useState({
    game: {
      teamA: {
        name: 'A',
        players: []
      },
      teamB: {
        name: 'B',
        players: []
      }
    },
    players: []
  })

  if (!loading && playersData !== context.players) {
    setContext({
      ...context,
      players: playersData
    })
  }

  return (
    <>
      {loading && <h4>Loading...</h4>}
      {!loading &&
        <Context.Provider value={[context, setContext]}>
          <div className="App">
            <Switch>
              <Route exact path='/' component={Lobby}/>
              <Route exact path='/newgame' component={CreateGame}/>
              <Route exact path='/result' component={GameResult}/>
              <Route path='/details/:username' component={PlayerDetails}/>
            </Switch>
          </div>
        </Context.Provider>
      }
    </>
  )
}

export default App
