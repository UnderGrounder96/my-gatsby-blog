import React from "react"

import FooterStyles from "../scss/components/footer.module.scss"

export default function Footer({ author, fullYear }) {
  return (
    <footer className={FooterStyles.footer}>
      &copy; {fullYear}. <strong>My Gatsby Blog</strong> - {author}. All rights
      reserved.
    </footer>
  )
}
