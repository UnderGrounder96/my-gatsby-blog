import React from "react"

import Layout from "../components/Layout"

export default function ContactPage() {
  return (
    <Layout page="Contact">
      <div className="content">
        <p>
          {" "}
          I'm always open for contact via{" "}
          <a
            href="http://twitter.com/UnderGrounder96"
            target="_blank"
            rel="noreferrer"
          >
            @UnderGrounder96
          </a>{" "}
          on Twitter. Feel free to ask about past work, future opportunities or
          just chatting.
        </p>
      </div>
    </Layout>
  )
}
