import React, { useState } from 'react'
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


function NavbarMenu() {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons.dragons);
  const [dragon, setDragon] = useState("")
  
  
  return (
    <Navbar bg="danger" variant="dark" className='navbarMenu'>
        <Container className="container-fluid" >
            <Nav className="active">
              {dragons.map((dragon) => {
                function HanhlerLsGetItem () {
                  const getDraconFromLS = JSON.parse(localStorage.getItem('draconItem'))
                  console.log(getDraconFromLS);
                }
                return (
                  <NavLink to={`/dragons/${dragon.id}`} key={dragon.id} className="nav-link"
                  onClick={HanhlerLsGetItem}
                  >{dragon.name}</NavLink>
                )
              })}
          </Nav>
        </Container>
    </Navbar>
  )
}

export default NavbarMenu