import React from 'react'
import { Menu, Dropdown } from 'antd'
import { CaretDownFilled } from '@ant-design/icons'
import { supportWallets } from '../config'
import Storage from '../utils/Storage'
import { selectedWallet } from '../utils/StorageTypes'
import { register } from 'concent'

@register({ module: 'app', watchedKeys: ['wallet'] })
class walletSelect extends React.Component {
    handleMenuClick = e => {
        const targetObj = supportWallets[e.key]
        // 存到localStorage，并存到全局状态
        Storage.set(selectedWallet, targetObj)
        this.ctx.dispatch('setWallet', targetObj)
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
                <a className="ant-dropdown-link" href="#/" onClick={e => e.preventDefault()}>
                    {this.state.wallet.text}
                    <CaretDownFilled style={{ fontSize: '12px' }} />
                </a>
            </Dropdown>
        )
    }
}

export default walletSelect
