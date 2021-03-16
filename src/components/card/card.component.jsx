import React from 'react'
import './card.styles.css'

const Card = (monsters) => {
  const { monster } = monsters
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${monster.id}.png?set=set2&size=180x180`}
      />
      <h1>{monster.name}</h1>
      <h2>{monster.email}</h2>
    </div>
  )
}
export default Card
