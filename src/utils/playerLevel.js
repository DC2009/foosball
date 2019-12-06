export const getPlayerLevel = (player) => {
  if (player.played > 100) {
    return 'EXPERT'
  } else if (player.played > 60) {
    return 'ADVANCED'
  } else if (player.played > 30) {
    return 'INTERMEDIATE'
  } else return 'BEGINNER'
  
}
