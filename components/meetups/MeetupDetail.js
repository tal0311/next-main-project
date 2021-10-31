import React from 'react'

function MeetUpDetails(props) {
  return (
    <>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
      <address>{props.address}</address>
    </>
  )
}

export default MeetUpDetails
