import React from 'react'
import './Header.css';
import CTA from './CTA';
import Avatar from '../../Assets/Avatar.png'
import Logo from '../../Assets/logo.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <>
    <img src={Logo} alt='Logo Image' className='logo'/>
      <header>
        <div className='container header__container'>
          <h5>hello I am</h5>
          <h1>Susmita Das</h1>
          <h5 className='text-light'>FullStack Developer</h5>
          <CTA />
          <HeaderSocial />

          <div className='avatar'>
            <img src={Avatar} alt='Avatar' />

            <a href='#contact' className='scroll__down'>Scroll Down</a>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header