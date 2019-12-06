import './game.scss'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../app'

const GameResult = () => {
  const [context, setContext] = useContext(Context)
  const { game } = context;

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
      <header className='Header BottomBorder'>
        <h4>GAME RESULT</h4>
      </header>
      <div className='Main'>
        <div className='Container ResultContainer'>
          <div className='ResultTeamName'>
            <h3>Team: {game.teamA.name}</h3>
          </div>
          <div className='GameScore'>{Math.floor(Math.random() * 10)} - {Math.floor(Math.random() * 10)}</div>
          <div>
            <h3>Team: {game.teamB.name}</h3>
          </div>
        </div>
        <div className='Container BarsContainer'>
          <Link className='BottomBar Ok' to='/newgame' onClick={handleNewGame}>New game</Link>
          <Link className='BottomBar Ok' to='/'>Lobby</Link>
        </div>
      </div>
    </div>
  )
}

export default GameResult
