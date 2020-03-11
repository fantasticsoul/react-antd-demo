import React from 'react'
import { Menu, Dropdown } from 'antd'
import { CaretDownFilled } from '@ant-design/icons'
import { supportWallets } from '../config'

export default class OverlayVisible extends React.Component {
    state = {
        lang: supportWallets[0],
    }

    handleMenuClick = e => {
        console.log(e)
        this.setState({ lang: supportWallets[e.key] })
    }

    handleVisibleChange = flag => {
        this.setState({ visible: flag })
    }

    render() {
        const menu = (
            <Menu onClick={this.handleMenuClick}>
                {supportWallets.map((lang, idx) => (
                    <Menu.Item key={idx}>{lang.text}</Menu.Item>
                ))}
            </Menu>
        )
        return (
            <Dropdown overlay={menu} trigger="click">
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    {this.state.lang.text}
                    <CaretDownFilled style={{ fontSize: '12px' }} />
                </a>
            </Dropdown>
        )
    }
}
