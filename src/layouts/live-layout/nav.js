import React from 'react'
import { Link } from 'react-router-dom'

export default function nav() {
  return (
    <ul>
      <li>
        <Link to="/live/bus">live Bus</Link>
      </li>
      <li>
        <Link to="/live/cart">live Cart</Link>
      </li>
    </ul>
  )
}
