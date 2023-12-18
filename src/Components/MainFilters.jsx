import React from 'react'
import './OtherStyles/OtherStyles.css'

const MainFilters = (props) => {
  const handleFilter = (filterType) => {
    props.onFilter(filterType)
  }

  const renderButtonStyle = (isActive) => {
    return isActive ? { backgroundColor: 'white' } : {}
  }

  return (
    <div className="filterButtons">
      <button
        className="filter"
        onClick={() => handleFilter(1)}
        style={renderButtonStyle(props.aboutStyle[0])}
      >
        Сначала дешёвые
      </button>
      <button
        className="filter"
        onClick={() => handleFilter(2)}
        style={renderButtonStyle(props.aboutStyle[1])}
      >
        Сначала дорогие
      </button>
      <button
        className="filter"
        onClick={() => handleFilter(3)}
        style={renderButtonStyle(props.aboutStyle[2])}
      >
        Сначала популярные
      </button>
    </div>
  )
}

export default MainFilters
