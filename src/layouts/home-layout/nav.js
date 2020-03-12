import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Modal } from 'antd'
import { LinkOutlined, TwitterOutlined } from '@ant-design/icons'
import { trontrade, whitePaper, roadmap, telegram, twitter } from '../../config/index'

export default function Nav() {
    const [visible, setVisible] = useState(false)
    return (
        <>
            <section className={'nav-bg'}>
                <nav className={'nav'}>
                    <ul className={'nav-link'}>
                        <li>
                            <NavLink to="/home/index">首页</NavLink>
                        </li>
                        <li className={'hide'}>
                            <a
                                href={trontrade}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="out-link trontrad"
                            >
                                交易所
                            </a>
                        </li>
                        <li>
                            <a
                                href="#/"
                                onClick={e => {
                                    e.preventDefault()
                                    setVisible(true)
                                }}
                            >
                                空投
                                {/* <BorderOutlined style={{ fontSize: '12px' }} /> */}
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
                                <LinkOutlined style={{ fontSize: '12px' }} />
                            </a>
                        </li>
                        <a
                            href={roadmap}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="out-link roadmap"
                        >
                            Roadmap
                            <LinkOutlined style={{ fontSize: '12px' }} />
                        </a>
                        <li>
                            <NavLink to="/home/tutorial">tutorial</NavLink>
                        </li>
                    </ul>

                    {/* 联系方式，电报、推特等 */}
                    <ul className={'nav-contact'}>
                        <li>
                            <a href={telegram} target="_blank" rel="noopener noreferrer">
                                {/* // TODO 改为 电报 */}
                                <TwitterOutlined />
                            </a>
                        </li>
                        <li>
                            <a href={twitter} target="_blank" rel="noopener noreferrer">
                                <TwitterOutlined />
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
            <Modal
                title="Basic Modal"
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                footer={null}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    )
}
