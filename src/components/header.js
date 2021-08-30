import React from 'react'
import Form from './form'

const Header = ({formResponse}) => {
  return (
    <div className="header">
      <Form clickHandler={formResponse} />
    </div>
  )
}

export default Header