import React from 'react'
import { Link } from 'react-router-dom'

export default function nav() {
  return (
    <ul>
      <li>
        <Link to="/rake/bus">rake Bus</Link>
      </li>
      <li>
        <Link to="/rake/cart">rake Cart</Link>
      </li>
    </ul>
  )
}
