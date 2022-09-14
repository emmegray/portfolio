import React from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';

const pages = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Works", link: "/works" },
    { name: "Contact", link: "/contact" }
];

export default function Header() {
    return (
        <header>
            <Navbar expand="lg" fixed="top" >
                <Container>
                    <Navbar.Brand href="#">
                        <Nav>
                            {pages.map(page => (
                                <Link key={page.name} passHref href={page.link}>
                                    <Nav.Link>{page.name}</Nav.Link>
                                </Link>
                            ))}
                        </Nav>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            {/* <ul>
                {pages.map(page => (
                    <li key={page.name}>
                        <Link href={page.link}>{page.name}</Link>
                    </li>
                ))}
            </ul> */}
        </header>
    )
}