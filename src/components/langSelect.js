import React from 'react'
import { Menu, Dropdown } from 'antd'
import { CaretDownFilled } from '@ant-design/icons'
import { supportLangs } from '../config'
import Storage from '../utils/Storage'
import { selectedLang } from '../utils/StorageTypes'
import { register } from 'concent'

@register('app')
class LangSelect extends React.Component {
    state = {
        lang: supportLangs[0], // 其实这里的lang会被全剧状态的lang覆盖！
    }

    handleMenuClick = e => {
        console.log(e)
        this.setState({ lang: supportLangs[e.key] })
        // TODO 存到localStorage，并存到全局状态
        Storage.set(selectedLang, supportLangs[e.key])
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

export default LangSelect
