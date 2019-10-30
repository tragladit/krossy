import React from "react"
import InfoCard from "../../components/infoCard/InfoCard"

const Card = ({ endCards, children }) => {
  return (
    endCards ?
      <InfoCard text='Вы всё просмотрели' /> :
      <div className='swipeable_card'>{children}</div>
  )
}

export default Card