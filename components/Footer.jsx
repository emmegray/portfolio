import React from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import styles from './Footer.module.css';

const socials = [
    { name: "GitHub", link: "https://github.com/emmegray", icon: "fa-round" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/manuela-ienuso-a44190111/", icon: "fa-round" },
    { name: "Twitch", link: "https://www.twitch.tv/emmegray", icon: "fa-round" },
];

export default function Footer() {
    return (
        <footer>
            <Navbar fixed="bottom">
                <Container className={styles.container}>
                    <Nav>
                        {socials.map(social => (
                            <Link key={social.name} href={social.link} passHref>
                                <Nav.Link>{social.name}</Nav.Link>
                            </Link>
                        ))}
                    </Nav>
                </Container>
            </Navbar>
        </footer>
    )
}