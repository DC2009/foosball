import './game.scss'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Team } from '../team'
import { Context } from '../app'

const CreateGame = () => {
  const [{ game, players}, setContext] = useContext(Context)
  const [availablePlayers, setAvailablePlayers] = useState([...players])
  const [teamsReady, setTeamsReady] = useState(false)

  const setTeam = (team) => {
    setContext(prevContext => ({
      ...prevContext,
      game: {
        teamA: team.name === prevContext.game.teamA.name ? team : prevContext.game.teamA,
        teamB: team.name === prevContext.game.teamB.name ? team : prevContext.game.teamB,
      }
    }))
  }

  useEffect(() => {
    setTeamsReady((game.teamA.players.length === 2 || game.teamA.players.length === 4) && (game.teamB.players.length === 2 || game.teamB.players.length === 4))
  }, [game])

  const handlePlayerSelect = (team, value) => {
    setAvailablePlayers(availablePlayers.filter(player => player.username !== value))

    setTeam({
      ...team,
      players: [...team.players, players.find(player => player.username === value)]
    })

  }

  const handlePlayerDelete = (team, username) => {
    setAvailablePlayers([...availablePlayers, players.find(player => player.username === username)])

    setTeam({
      ...team,
      players: team.players.filter(player => player.username !== username)
    })
  }

  return (
    <div>
      <header className='Header'>
        <h4>CREATE A NEW GAME</h4>
      </header>
      <div className='Main'>
        <form className='Container TeamsContainer'>
          {Team(game.teamA, availablePlayers, handlePlayerSelect, handlePlayerDelete)}
          {Team(game.teamB, availablePlayers, handlePlayerSelect, handlePlayerDelete)}
          {!teamsReady &&
            <div className='BottomBar Warning'>Teams must have two or four players</div>
          }
          { teamsReady &&
            <Link className='BottomBar Ok' to='/result'>Play</Link>
          }
        </form>
      </div>
    </div>
  )
}

export default CreateGame