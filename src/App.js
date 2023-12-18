import React, { useState } from 'react'
import './styles.css'
import SearchString from './Components/SearchString'
import MainFilters from './Components/MainFilters'
import ColorFilter from './Components/OtherFilters/ColorFilter'
import PriceFilter from './Components/OtherFilters/PriceFilter'
import Things from './Components/Things'
import generateItems from './Components/GenerateItems/generateItems'

const itemArray = generateItems(100)
console.log(itemArray)

const App = () => {
  const [tmpSorts, setSorts] = useState([false, false, false])
  const [tmpArray, setArray] = useState(itemArray)

  const handleFilter = (way) => {
    let sortedArray = [...tmpArray]
    if (way === 1) {
      sortedArray.sort((a, b) => (a.price > b.price ? 1 : -1))
      setSorts([true, false, false])
    } else if (way === 2) {
      sortedArray.sort((a, b) => (a.price < b.price ? 1 : -1))
      setSorts([false, true, false])
    } else if (way === 3) {
      sortedArray.sort((a, b) => (a.rating < b.rating ? 1 : -1))
      setSorts([false, false, true])
    }
    setArray(sortedArray)
  }

  const handleColorFilter = (arr) => {
    if (arr.length !== 0) {
      const filteredArray = itemArray.filter((item) => arr.includes(item.color))
      setArray(filteredArray)
    } else {
      setArray(itemArray)
    }
    setSorts([false, false, false])
  }

  const handleSearchFilter = (value) => {
    const filteredArray = itemArray.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    )
    setArray(filteredArray)
    setSorts([false, false, false])
  }

  const handlePriceFilter = (arr) => {
    const filteredArray = itemArray.filter(
      (item) => item.price >= arr[0] && item.price <= arr[1]
    )
    setArray(filteredArray)
    setSorts([false, false, false])
  }

  return (
    <div className="App">
      <SearchString onChange={handleSearchFilter} />
      <MainFilters aboutStyle={tmpSorts} onFilter={handleFilter} />
      <div className="mainPart">
        <div className="otherFilters">
          <ColorFilter array={itemArray} onFilterByColor={handleColorFilter} />
          <PriceFilter onChange={handlePriceFilter} />
          <div>ВСЕГО ТОВАРОВ {tmpArray.length}</div>
        </div>
        <Things array={tmpArray} />
      </div>
    </div>
  )
}

export default App
