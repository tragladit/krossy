import React from "react"

const cardStyles = { height: '100%', cursor: 'pointer', userSelect: 'none' }

const Card = ({ zIndex = 0, children }) => (
  <div className='swipeable_card' style={{ ...cardStyles, zIndex }}>{children}</div>
)

export default Card