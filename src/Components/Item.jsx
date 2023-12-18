import React from 'react'
import './OtherStyles/OtherStyles.css'

const Item = (props) => {
  return (
    <div className="description">
      <p className="image">
        <img src={props.image} alt="the end" />
      </p>
      <div className="info">
        <span>{props.name}</span>
        <span>Цвет {props.color}</span>
        <span>Цена {props.price}</span>
        <span>Рейтинг {props.rating}</span>
      </div>
    </div>
  )
}

export default React.memo(Item)
