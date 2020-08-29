import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      Menu
      <ul>
        <Link to="/batalha">Batalha</Link>
      </ul>
      <ul>
        <Link to="/colecao">Colecao</Link>
      </ul>
    </div>
  )
}

export default Menu
