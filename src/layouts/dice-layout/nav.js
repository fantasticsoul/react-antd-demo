import React from 'react'
import { Link } from 'react-router-dom'

export default function nav() {
  return (
    <nav className={'nav'}>
      <ul>
        <li>
          <Link to="/dice/home">dice home</Link>
        </li>
        <li>
          <Link to="/dice/test">dice test</Link>
        </li>
      </ul>
    </nav>
  )
}
