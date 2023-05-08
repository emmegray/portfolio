import React from "react";
import Link from "next/link";
import { Nav } from "react-bootstrap";
import { data } from "../data/data.js"

export default function Header() {
  return (
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4">
      <Nav>
        {data.Header.pages.map((page) => (
          <Link key={page.name} passHref href={page.link}>
            <Nav.Link style={{ color: "white" }}>{page.name}</Nav.Link>
          </Link>
        ))}
      </Nav>
    </header>
  );
}