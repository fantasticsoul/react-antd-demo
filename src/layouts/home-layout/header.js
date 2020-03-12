import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import LangSelect from '../../components/langSelect'
import WalletSelect from '../../components/walletSelect'
import { Button } from 'antd'

export default function header() {
    return (
        <section className={'header-bg'}>
            <header className={'header'}>
                <Link to="/home" style={{ height: '60px' }}>
                    <img src={logo} alt="logo" className="platform-logo" height="60" />
                </Link>
                <LangSelect></LangSelect>

                {/* 技巧：marginLeft: 'auto'可以使flex分成左右两边 */}
                <Button type="primary" style={{ marginLeft: 'auto', marginRight: '30px' }}>
                    Login
                </Button>
                <WalletSelect></WalletSelect>
            </header>
        </section>
    )
}
