import React, { useState, useEffect } from "react"

import SpinnerStyles from "../scss/components/spinner.module.scss"

export default function Spinner({ duration }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, duration)
  })

  function checkLoading() {
    return loading ? "flex" : "none"
  }

  return (
    <div
      id="spinner"
      className={SpinnerStyles.spinnerWrapper}
      style={{ display: checkLoading() }}
    >
      <div
        className={SpinnerStyles.spinner}
        style={{ display: checkLoading() }}
      >
        <div
          className={SpinnerStyles.spinnerInner}
          style={{ display: checkLoading() }}
        ></div>
      </div>
    </div>
  )
}
