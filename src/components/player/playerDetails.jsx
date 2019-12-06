import React, { useContext } from 'react'
import { imagesPath } from '../common/consts'
import { Context } from '../app'
import { getPlayerLevel } from '../../utils'
import { Link } from 'react-router-dom'
import './player.scss'

const PlayerDetails = ({ history, match }) => {
  console.log(history)
  const [context] = useContext(Context)
  const player = context.players.find(player => player.username === match.params.username)

  return (
    <div>
      {player && <>
        <header className='Header PlayerDetailsHeader BottomBorder'>
          <h4>PLAYER DETAILS</h4>
          <Link className='HeaderLink' to='/'>Back</Link>
        </header>
        <div className='Main'>
          <div className='Container'>
            <div className='DetailsContainer'>
              <div className='PlayerDetailsContainer'>
                <img className='DetailsImage' alt='player portrait' src={imagesPath + player.image}/>
                <div className='NameContainer'>
                  <h4>{player.name}</h4>
                  <h4>{player.surname}</h4>
                </div>
              </div>
              <div className='StatsContainer'>
                <div className='StatsLevelContainer'>
                  <h4>Level: {getPlayerLevel(player)}</h4>
                </div>
                <div className='StatsDataContainer'>
                  <h4>Stats:</h4>
                  <h4>Matches played: {player.played}</h4>
                  <h4>Matches won: {player.won}</h4>
                  <h4>Matches lost: {player.lost}</h4>
                  <h4>Scored goals: {player.scores}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>}
      {!player && <h2>Player not found</h2>}
    </div>
  )
}

export default PlayerDetails
