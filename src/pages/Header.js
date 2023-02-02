import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";

const logo = require('../assets/images/logo.png');

function Header({ filter }) {
  const navigate = useNavigate();
  
  return (
    <Navbar className='headerBg' expand="lg">
      <Container>
        <Navbar.Brand><img src={logo} style={{ width: 160, height: 50}} alt="Logo" onClick={() => navigate(`/`)} /></Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;

const styles = {
  whiteFont: {
    color: '#fff'
  },
  paddingRTen: {
    paddingRight: '10px'
  },
  pointer: {
    cursor: 'pointer'
  }
};