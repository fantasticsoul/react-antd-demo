import React from 'react'
import { Menu, Dropdown } from 'antd'
import { CaretDownFilled } from '@ant-design/icons'
import { supportLangs } from '../config'
import Storage from '../utils/Storage'
import { register } from 'concent'

@register('foo')
class LangSelect extends React.Component {
    state = {
        lang: supportLangs[0],
        bar: 200,
    }

    handleMenuClick = e => {
        console.log(e)
        this.setState({ lang: supportLangs[e.key] })
        // TODO 存到localStorage，并存到全局状态
        Storage.set('selectedLang', supportLangs[e.key])
    }

    render() {
        const { lang, foo, bar } = this.state
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
                    {lang}
                    {foo}
                    {bar}
                    <CaretDownFilled style={{ fontSize: '12px' }} />
                </a>
            </Dropdown>
        )
    }
}

export default LangSelect
