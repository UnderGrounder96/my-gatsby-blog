import React from "react"

export default function Footer({fullYear}) {
  return (
    <footer>
      <div>
        &copy; {fullYear}. <strong>My Gatsby Blog</strong>. All
        rights reserved.
      </div>
    </footer>
  )
}
