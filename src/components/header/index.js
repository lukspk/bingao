import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, FormControl, Button, Form } from 'react-bootstrap';

// import { Container } from './styles';

export default class Header extends Component {
 
    render()
    {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Bingão</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Início</Nav.Link>
                {/* <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Digite Sua Busca" className="mr-sm-2" />
                <Button variant="outline-success">Buscar</Button>
            </Form>
            </Navbar.Collapse>
        </Navbar>
        );
    }
}