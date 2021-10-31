import React from 'react'
import style from './MeetupDetail.module.css'

function MeetUpDetail(props) {
  return (
    <section className={style.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
      <address>{props.address}</address>
    </section>
  )
}

export default MeetUpDetail
