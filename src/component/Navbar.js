import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Navbar, NavDropdown } from 'react-bootstrap';

const Navbars = () => {

  const navigate = useNavigate()

  const goToLogin = () => {
    navigate('/login')
  }
  const goToMy = () => {
    navigate('/my')
  }
  const goToHome = () => {
    navigate('/')
  }
  const goToRecipe = () => {
    navigate('/recipe')
  }
  const goToWriting = () => {
    navigate('/writing')
  }

  return (
    <div>
        <div class="login-button">
        <FontAwesomeIcon icon={faBowlFood} onClick={goToHome} border />
        <FontAwesomeIcon icon={faUser} onClick={goToMy} border />
        <div expand="sm">
            <NavDropdown title="Menu">
              <NavDropdown.Item onClick={goToRecipe}>레시피구경</NavDropdown.Item>
              <NavDropdown.Item onClick={goToWriting}>레시피작성</NavDropdown.Item>
            </NavDropdown>
      </div>
        <div id='login' onClick={goToLogin}>로그인</div>
        </div>
       </div>
  )
}

export default Navbars
