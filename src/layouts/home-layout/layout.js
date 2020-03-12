import React from 'react'
import { Switch } from 'react-router-dom'
import { RouteWithSubRoutes } from '../../App'

import Header from './header'
import Nav from './nav'
import Footer from './footer'

import './index.less'

export default function homeLayout({ routes }) {
    return (
        <div className={'home-layout'}>
            <div className={'header-bg'}>
                <Header></Header>
            </div>
            <div className={'nav-bg'}>
                <Nav></Nav>
            </div>
            {/* /home/index：轮播图；/home/tutorial：游戏教程 */}
            <section className={'home-content'}>
                <Switch>
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}
                </Switch>
            </section>

            <div className={'footer-bg'}>
                <Footer></Footer>
            </div>
        </div>
    )
}
