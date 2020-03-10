import RakeLayout from '../../layouts/rake-layout/layout'
import Main from '../../pages/home/main'

export default [
  {
    path: '/rake',
    component: RakeLayout,
    routes: [
      {
        path: '/rake/home',
        component: Main
      }
    ]
  }
]
