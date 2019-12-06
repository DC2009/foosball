import React from 'react'
import './team.scss'

const PlayerInput = (availablePlayers, onChange) => {
  return (
    <select className='Select'
      onChange={e => onChange(e.target.value)}
    >
      <option>Select a player</option>
      {availablePlayers.map(ap => {
        return (
        <option
          key={ap.username}
          value={ap.username}
        >
          {ap.name} {ap.surname}
        </option>
      )})}
    </select>
  )
}

const Player = (player, onDelete) => (
  <div
    className='TeamPlayer'
    key={player.username}
  >
    <div className='Label'>
      {player.name} {player.surname}
    </div>
    <button type='button' onClick={() => onDelete(player.username)}>X</button>
  </div>
)

const Team = (team, availablePlayers, onPlayerSelect, onPlayerDelete) => {
  const { name, players } = team
  return (
    <div className='Team'>
      <header>TEAM {name}</header>
      <div className='DataContainer'>
        {players.map(player => (
          Player(
            player,
            (username) => onPlayerDelete(team, username))
        ))}
        {(players.length < 4) && PlayerInput(
          availablePlayers,
          (value => onPlayerSelect(team, value))
        )}  
      </div>
    </div>
  )
}

export default Team