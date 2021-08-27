import React from 'react'

const Form = ({clickHandler}) => {

  const handleClick = (e) => {
    const searchBar = document.querySelector('.search')

    e.preventDefault()
    clickHandler()

    searchBar.value = ''
  }

  return (
    <form>
      <input type="text" name="search" className="search" placeholder="Search by city.." ></input>
      <button type="submit" className="form-submit" onClick={handleClick}>Search</button>
    </form>
  )
}

export default Form;