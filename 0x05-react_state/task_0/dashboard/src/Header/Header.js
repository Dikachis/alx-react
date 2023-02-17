import React from 'react';
import logo from '../assets/holberton_logo.jpg';
import { css, StyleSheet } from 'aphrodite';

function Header() {
  return (
    <div className={css(headerStyles.appHeader)}>
      <img src={logo} alt="logo" className={css(headerStyles.img)} />
      <h1 className={css(headerStyles.h1)} >School dashboard</h1>
    </div>
  )
}

const headerStyles = StyleSheet.create({
  appHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    borderBottom: '3px solid #e1484c',
    marginTop: '30px',
  },
  img: {
    width: '150px',
    height: '150px'
  },
  h1:{
    margin: 'auto auto auto 0',
    color: '#e1484c',
  }
})

export default Header;
