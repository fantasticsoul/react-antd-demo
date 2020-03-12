import React from 'react'
import { Menu, Dropdown } from 'antd'
import { CaretDownFilled } from '@ant-design/icons'
import { supportLangs } from '../config'

// export default function walletSelect() {
//   return <div className={'walletSelect'}>钱包选择</div>
// }

export default class OverlayVisible extends React.Component {
    state = {
        lang: supportLangs[0],
    }

    handleMenuClick = e => {
        console.log(e)
        this.setState({ lang: supportLangs[e.key] })
        // TODO 存到localStorage，并存到全局状态
        window.localStorage.setItem('selectedLang', JSON.stringify(supportLangs[e.key]))
    }

    render() {
        const menu = (
            <Menu onClick={this.handleMenuClick}>
                {supportLangs.map((lang, idx) => (
                    <Menu.Item key={idx}>{lang.text}</Menu.Item>
                ))}
            </Menu>
        )
        return (
            <Dropdown overlay={menu} trigger="click">
                <a className="ant-dropdown-link" href="#/" onClick={e => e.preventDefault()}>
                    {this.state.lang.text}
                    <CaretDownFilled style={{ fontSize: '12px' }} />
                </a>
            </Dropdown>
        )
    }
}
