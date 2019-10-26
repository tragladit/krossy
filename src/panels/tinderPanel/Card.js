import React from "react"

const cardsOk = { cursor: 'pointer', userSelect: 'none' } 

const cardsNo = {
  display: 'flex', justifyContent: 'center', position: 'absolute', left: '50%', top: '50%',
  borderRadius: '18px', boxShadow: '0 3px 16px rgba(174, 191, 207, 0.3)', fontSize: '26px',
  color: '#aebfcf', padding: '40px 10px', transform: 'translate(-50%, -50%)', width: '80%', zIndex: '-2'
}

const Card = ({ endCards, children }) => {
  return (
    endCards ?
      <div style={cardsNo}>Вы всё просмотрели</div> :
      <div className='swipeable_card' style={cardsOk}>{children}</div>
  )
}

export default Card