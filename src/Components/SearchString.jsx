import React from 'react'
import './OtherStyles/OtherStyles.css'

const SearchString = (props) => {
  const handleChange = (e) => {
    props.onChange(e.target.value)
  }

  return (
    <div className="search-container">
      <input
        type="text"
        id="searchInput"
        placeholder="Поиск"
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchString
