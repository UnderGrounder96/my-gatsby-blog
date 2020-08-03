import React from "react"

export default function Footer() {
  return (
    <footer>
      <div>
        &copy; {new Date().getFullYear()}. <strong>My Gatsby Blog</strong>. All
        rights reserved.
      </div>
    </footer>
  )
}
