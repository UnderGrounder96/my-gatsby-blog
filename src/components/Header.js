import React from "react"
import { Link } from "gatsby"

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <img loading="lazy" src="favicon.ico" alt="logo" />
        </Link>

        <ul>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
