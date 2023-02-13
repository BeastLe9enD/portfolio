import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import * as Icon from 'react-bootstrap-icons'
import React from 'react';

function Link({href, title}) {
    return <Nav.Link href={href}>{title}</Nav.Link>
}

function LinkSpacer() {
    return <div className="nav-link-spacer"></div>
}

function IconLink({href, icon}) {
    return (
        <div className="nav-link-icon">
            <a href={href}>
                {icon}
            </a>
        </div>
    );
}

function IconContainer(props) {
    return (
        <div className="nav-link-icon-container">
            {props.children}
        </div>
    )
}

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="fixed-top animate__animated animate__slideInDown">
            <Container>
                <Navbar.Brand href="#home">Lorenz Klaus</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Link href="#about" title="About"/>
                        <Link href="#work" title="Work"/>
                        <Link href="#contact" title="Contact"/>

                        <LinkSpacer/>

                        <IconContainer>
                            <IconLink href="https://github.com/beastle9end" icon={<Icon.Github/>}/>
                            <IconLink href="https://instagram.com/beastle9end" icon={<Icon.Instagram/>}/>
                            <IconLink href="https://twitter.com/beastle9end" icon={<Icon.Twitter/>}/>
                        </IconContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;