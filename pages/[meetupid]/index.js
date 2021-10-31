import React from 'react'
import MeetUpDetail from '../../components/meetups/MeetupDetail'

function MeetUpDetails() {
  return (
    <>
      <MeetUpDetail
        image='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/TelAvivCity.jpg/900px-TelAvivCity.jpg'
        title='A first meetup'
        desc='Meetup description'
        address='The meet up address'
      />
    </>
  )
}

export default MeetUpDetails
