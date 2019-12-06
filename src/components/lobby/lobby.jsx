import './lobby.scss'
import React, { useContext } from 'react'
import { PlayerCard } from '../player'
import { imagesPath } from '../common/consts'
import { Link } from 'react-router-dom'
import { Context } from '../app'

const Lobby = () => {
  const [context, setContext] = useContext(Context)

  const handleNewGame = () => {
    setContext(prevContext => ({
      ...prevContext,
      game: {
        teamA: {
          ...prevContext.game.teamA,
          players: []
        },
        teamB: {
          ...prevContext.game.teamB,
          players: []
        },
      }
    }))
  }

  return (
    <div>
      <header className='Header LobbyHeader'>
        <img className='Logo' alt='logo' src={imagesPath + 'foosball-logo.svg'}/>
        <Link className='HeaderLink' to='/newgame' onClick={handleNewGame}>New game</Link>
      </header>
      <div className='Main'>
        <div className='Container LobbyPlayersContainer'>
          <h3>PLAYERS</h3>
            <ul className='Container PlayersList'>
              {context && context.players.map(player => (
                <li key={player.username}>
                  {PlayerCard(player)}
                </li>
              ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Lobby