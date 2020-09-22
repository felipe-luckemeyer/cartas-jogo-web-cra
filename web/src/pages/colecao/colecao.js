import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from "../../components";

const cartas = [
  {
    nome: "Dragão Dourado",
    mana: 5,
    classe: "fogo",
    vida: 7,
    ataque: 5,
    image: null
  }
]

const Colecao = () => {
  return (
    <div>
      Colecao
      {cartas.map(carta => <Card carta={carta} />)}
      <ul>
        <Link to="/menu">Menu</Link>
      </ul>
    </div>
  )
}

export default Colecao