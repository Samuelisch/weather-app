import React from 'react'

const Form = ({clickHandler}) => {
  return (
    <form>
      <input type="text" name="search" className="search" placeholder="Search by city.." ></input>
      <button type="submit" onClick={clickHandler}>Search</button>
    </form>
  )
}

export default Form;