import React from 'react'

const Form = () => {
  const clickHandler = (e) => {
    e.preventDefault();
    const city = document.querySelector('.search').value;
    console.log(city);
  }
  return (
    <form>
      <input type="text" name="search" className="search" placeholder="Search by city.." ></input>
      <button type="submit" onClick={clickHandler}>Search</button>
    </form>
  )
}

export default Form;