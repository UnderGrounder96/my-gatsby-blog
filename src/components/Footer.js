import React from "react"

import FooterStyles from "../scss/components/footer.module.scss"

export default function Footer({ fullYear }) {
  return (
    <footer className={FooterStyles.footer}>
      <div>
        &copy; {fullYear}. <strong>My Gatsby Blog</strong>. All rights reserved.
      </div>
    </footer>
  )
}
