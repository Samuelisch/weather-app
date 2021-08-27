import React from 'react'
import Form from './form'

const Header = ({formResponse}) => {
  return (
    <div className="header">
      <div className="logo"></div>
      <Form clickHandler={formResponse} />
    </div>
  )
}

export default Header