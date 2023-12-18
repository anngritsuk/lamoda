import React, { useState } from 'react'
import '../OtherStyles/OtherStyles.css'

const PriceFilter = (props) => {
  const defaultPrice = [0, 9999]
  const [tmpPriceArray, setArray] = useState(defaultPrice)

  const handleMinValue = (e) => {
    const minValue = parseInt(e.target.value)
    if (!isNaN(minValue)) {
      const newPriceArray = [minValue, tmpPriceArray[1]]
      setArray(newPriceArray)
      props.onChange(newPriceArray)
    }
  }

  const handleMaxValue = (e) => {
    const maxValue = parseInt(e.target.value)
    if (!isNaN(maxValue)) {
      const newPriceArray = [tmpPriceArray[0], maxValue]
      setArray(newPriceArray)
      props.onChange(newPriceArray)
    }
  }

  return (
    <div className="priceFilter">
      <div className="nameOfPriceFilter">фильтр цены</div>
      <div className="inputPriceField">
        <input
          className="inputField"
          id="minValue"
          onChange={handleMinValue}
          type="text"
        />
        <p> — </p>
        <input
          className="inputField"
          id="maxValue"
          onChange={handleMaxValue}
          type="text"
        />
      </div>
    </div>
  )
}

export default PriceFilter
