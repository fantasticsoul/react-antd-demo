import LiveLayout from '../../layouts/live-layout/layout'
import Main from '../../pages/live/main'

export default [
  {
    path: '/live',
    component: LiveLayout,
    routes: [
      {
        path: '/live/home',
        component: Main
      }
    ]
  }
]
