import React from 'react'
import '../OtherStyles/OtherStyles.css'

const Color = (props) => {
  const handleCheck = () => {
    props.onChangeColorArr(props.color)
  }

  return (
    <label className="color-label">
      <input
        className="checkboxFilter"
        type="checkbox"
        onChange={handleCheck}
      />
      {props.color}
    </label>
  )
}

export default Color
