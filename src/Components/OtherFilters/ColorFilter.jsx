import React, { useState } from 'react'
import '../OtherStyles/OtherStyles.css'
import Color from './Color'

const ColorFilter = (props) => {
  const colorArray = createColorArray()
  const [tmpArray, setArray] = useState(colorArray)

  function createColorArray() {
    let arr = props.array.map((item) => item.color)
    let uniqueColors = [...new Set(arr)]
    let colorArray = uniqueColors.map((color) => ({
      color: color,
      done: false,
    }))
    return colorArray
  }

  const handleChangeOfColorArray = (color) => {
    const updatedArray = tmpArray.map((item) =>
      item.color === color ? { color: item.color, done: !item.done } : item
    )
    setArray(updatedArray)

    const filteredColors = updatedArray
      .filter((item) => item.done)
      .map((item) => item.color)
    props.onFilterByColor(filteredColors)
  }

  return (
    <div className="colorFilter">
      <div className="nameOfColorFilter">По цвету</div>
      {colorArray.map((item, index) => (
        <Color
          key={index}
          color={item.color}
          checked={item.done}
          onChangeColorArr={handleChangeOfColorArray}
        />
      ))}
    </div>
  )
}

export default ColorFilter
