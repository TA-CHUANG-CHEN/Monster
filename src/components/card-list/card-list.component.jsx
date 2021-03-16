import React from 'react'
import './card-list.styles.css'
import Card from '../card/card.component'

const CardList = (filterMonsters) => {
  const { monsters } = filterMonsters
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />
      })}
    </div>
  )
}

export default CardList
