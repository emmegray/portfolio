import React from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socials = [
  {
    name: "GitHub",
    link: "https://github.com/emmegray",
    icon: "fa-brands fa-github",
    style: "#FFFFFF",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/manuela-ienuso-a44190111/",
    icon: "fa-brands fa-linkedin",
    style: "#FFFFFF",
  },
  {
    name: "Twitch",
    link: "https://www.twitch.tv/emmegray",
    icon: "fa-brands fa-twitch",
    style: "#FFFFFF",
  },
];

export default function Footer() {
  return (
    <footer>
      <Navbar>
        <Container>
          <Nav>
            <p class="text-white">© 2023 Emme Gray</p>
          </Nav>
        </Container>
      </Navbar>
    </footer>
  );
}
