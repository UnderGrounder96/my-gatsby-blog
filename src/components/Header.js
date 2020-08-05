import React from "react"
import { Link } from "gatsby"

import HeaderStyles from "../scss/components/header.module.scss"

export default function Header() {
  return (
    <header className={HeaderStyles.header}>
      <nav>
        <ul className={HeaderStyles.navList}>
          <li>
            <Link
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
              to="/"
            >
              <img
                className={HeaderStyles.logo}
                width="50px"
                height="50px"
                loading="lazy"
                src="logo.png"
                alt="logo"
              />
            </Link>
          </li>
          <li>
            <Link
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
