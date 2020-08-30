import React from 'react'
import { Link } from 'react-router-dom'
import * as s from './styled-menu-button'

const MenuButton = ({
  text, path
}) => {
  return (
    <s.Button>
      <Link to={path}>{text}</Link>
    </s.Button >
  )
}

export default MenuButton
