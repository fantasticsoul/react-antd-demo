import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import LangSelect from '../../components/langSelect'
import WalletSelect from '../../components/walletSelect'

export default function header() {
  return (
    <header className={'header'}>
      <Link to="/home" style={{ height: '60px' }}>
        <img src={logo} alt="logo" className="platform-logo" height="60" />
      </Link>
      <LangSelect></LangSelect>

      <div className="for" id="login-btn" style={{ 'margin-left': 'auto' }}>
        Login
        {/* {address == '' ? <button onClick={() => Wallet.checkLogin()}>Login</button> : Common.parseName(address)} */}
      </div>
      <WalletSelect></WalletSelect>
    </header>
  )
}
