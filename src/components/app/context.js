import React from 'react'

export const Context = React.createContext({
  game: {
    teamA: {
      name: '',
      players: []
    },
    teamB: {
      name: '',
      players: []
    }
  },
  players: []
})
