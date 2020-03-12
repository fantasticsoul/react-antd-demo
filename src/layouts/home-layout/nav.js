import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import { trontrade, whitePaper, roadmap, telegram, twitter } from '../../config/index'

export default function nav() {
    return (
        <nav className={'nav'}>
            <ul className={'nav-link'}>
                <li>
                    <NavLink to="/home/index">首页</NavLink>
                </li>
                <li>
                    <a
                        href={trontrade}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hide"
                        title="out-link trontrad"
                    >
                        交易所
                    </a>
                </li>
                <li>
                    <Link to="/home">FAQ</Link>
                </li>
                <li>
                    <a
                        href={whitePaper('en')}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="out-link whitePaper"
                    >
                        白皮书
                    </a>
                </li>
                <a
                    href={roadmap}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="out-link roadmap"
                >
                    Roadmap
                </a>
                <li>
                    <NavLink to="/home/tutorial">tutorial</NavLink>
                </li>
            </ul>

            {/* 联系方式，推特、电报等 */}
            <ul className={'nav-contact'}>
                <li>
                    <a href={telegram} target="_blank" rel="noopener noreferrer">
                        telegram
                        <i className="iconfont icon-telegram" style={{ fontSize: '20px' }}></i>
                    </a>
                </li>
                <li>
                    <a href={twitter} target="_blank" rel="noopener noreferrer">
                        twitter
                        <i className="iconfont icon-twitter" style={{ fontSize: '20px' }}></i>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
