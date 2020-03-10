import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import routes from './router/index'
console.log(routes)
export default function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Redirect exact from="/home" to="/home/index" />
        <Redirect exact from="/dice" to="/dice/home" />
        <Redirect exact from="/rake" to="/rake/home" />
        <Redirect exact from="/live" to="/live/home" />

        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}

        {/* 其他所有路由都跳到404 */}
        {/* <Redirect from="*" to="/404" /> */}
      </Switch>
    </Router>
  )
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
export function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}
