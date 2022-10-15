import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/count">Counter</Nav.Link>
        <Nav.Link href="/students">Students</Nav.Link>
        <Nav.Link href="/searching">Searching</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Header