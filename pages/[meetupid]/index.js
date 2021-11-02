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

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [{ params: { meetupid: 'm1' } }, { params: { meetupid: 'm2' } }],
  }
}
export const getStaticProps = async (context) => {
  // fetch data for single meet up

  const meetupid = context.params.meetupid
  console.log(meetupid)

  return {
    props: {
      meetupData: {
        id: meetupid,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/TelAvivCity.jpg/900px-TelAvivCity.jpg',
        title: 'A first meetup',
        desc: 'Meetup description',
        address: 'The meet up address',
      },
    },
  }
}

export default MeetUpDetails
