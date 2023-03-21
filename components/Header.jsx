import React from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";

import styles from "./Header.module.css";

const pages = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Works", link: "/works" },
  { name: "Contact", link: "/contact" },
];

export default function Header() {
  return (
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4">
      {/* <img src="works/material/Emme kappa.png" width={50} class="d-flex align-items-center mb-3 mb-md-0 me-md-auto"/> */}

      <Nav>
        {pages.map((page) => (
          <Link key={page.name} passHref href={page.link}>
            <Nav.Link style={{ color: "white" }}>{page.name}</Nav.Link>
          </Link>
        ))}
      </Nav>
    </header>
  );
}

{
  /* <Navbar collapseOnSelect expand="lg" fixed="top" >
                <Container>
                    <Navbar.Brand><img src="works/material/Grumpy.png" width={80} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="justify-content-center">
                            {pages.map(page => (
                                <Link key={page.name} passHref href={page.link} >
                                    
                                    <Nav.Link style={{color: 'white'}}>{page.name}</Nav.Link>
                                    
                                </Link>
                            ))}
                        </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar> */
}

{
  /* <ul>
                {pages.map(page => (
                    <li key={page.name}>
                        <Link href={page.link}>{page.name}</Link>
                    </li>
                ))}
            </ul> */
}
