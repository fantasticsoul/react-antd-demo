import React from 'react'
import { Switch } from 'react-router-dom'
import { RouteWithSubRoutes } from '../../App'

import Header from './header'
import Nav from './nav'

export default function layout({ routes }) {
  return (
    <div className={'rake-layout'}>
      <Header></Header>
      <Nav></Nav>

      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  )
}
