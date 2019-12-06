import React from 'react'
import { imagesPath } from '../common/consts'
import './player.scss'
import { Link } from 'react-router-dom'
import { getPlayerLevel } from '../../utils'

const PlayerCard = (player) => {
  return (
    <div className='Card'>
      <img className='CardImage' alt='player portrait' src={imagesPath + player.image}/>
      <div className='PlayerDataContainer'>
        <h4>{player.name}</h4>
        <h4>{player.surname}</h4>
        <h5>Level:</h5>
        <h4>{getPlayerLevel(player)}</h4>
        <Link className='PlayerDetailsLink' to={`/details/${player.username}`}>Details</Link>
      </div>
    </div>
  )
}

export default PlayerCard