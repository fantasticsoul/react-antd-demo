import HomeLayout from '../../layouts/home-layout/layout'
import Main from '../../pages/home/main'
import Tutorial from '../../pages/home/tutorial'

export default [
  {
    path: '/home',
    component: HomeLayout,
    routes: [
      {
        path: '/home/index',
        component: Main
      },
      {
        path: '/home/tutorial', // 游戏教程
        component: Tutorial
      }
    ]
  }
]
