import React from 'react'
import MainNavigation from '../components/layout/MainNavigation'
import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUP = [
  {
    id: 'm1',
    title: 'first meet up',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/TelAvivCity.jpg/900px-TelAvivCity.jpg',
    address: 'some address 5, 12345 some city',
    desc: 'this ais a first meet up!',
  },
  {
    id: 'm2',
    title: 'first meet up',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/TelAvivCity.jpg/900px-TelAvivCity.jpg',
    address: 'some address 5, 12345 some city',
    desc: 'this ais a first meet up!',
  },
]
function HomePage({ meetups }) {
  return <MeetupList meetups={meetups} />
}

// return props for the compnent
export const getStaticProps = async () => {
  // fetch data from api
  return {
    props: {
      meetups: DUMMY_MEETUP,
    },
  }
}
export default HomePage
