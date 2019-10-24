import React from "react"

const cardStyles = {
  width: "auto",
  height: "auto",
  cursor: "pointer",
  userSelect: "none"
}

const Card = ({ zIndex = 0, children }) => <div style={{ ...cardStyles, zIndex }}>{children}</div>

export default Card