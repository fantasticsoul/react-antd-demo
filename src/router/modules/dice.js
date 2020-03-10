import DiceLayout from '../../layouts/dice-layout/layout'
import Main from '../../pages/dice/main'
import Test from '../../pages/dice/test'

export default [
  {
    path: '/dice',
    component: DiceLayout,
    routes: [
      {
        path: '/dice/home',
        component: Main
      },
      {
        path: '/dice/test',
        component: Test
      }
    ]
  }
]
