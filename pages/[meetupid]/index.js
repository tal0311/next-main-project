import { MongoClient, ObjectId } from 'mongodb'
import Head from 'next/head'
import React from 'react'
import MeetUpDetail from '../../components/meetups/MeetupDetail'

function MeetUpDetails(props) {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name='description' content={props.meetupData.description} />
      </Head>
      <MeetUpDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        desc={props.meetupData.description}
        address={props.meetupData.address}
      />
    </>
  )
}

export const getStaticPaths = async () => {
  const dbString =
    'mongodb+srv://talamit:711Aialt@meetups.uwzlc.mongodb.net/meetups?retryWrites=true&w=majority'

  const client = await MongoClient.connect(dbString)
  const db = client.db()
  const meetupsCollection = db.collection('meetups')

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray()

  client.close()

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupid: meetup._id.toString() },
    })),
  }
}
export const getStaticProps = async (context) => {
  // fetch data for single meet up

  const meetupid = context.params.meetupid
  console.log(meetupid)

  const dbString =
    'mongodb+srv://talamit:711Aialt@meetups.uwzlc.mongodb.net/meetups?retryWrites=true&w=majority'

  const client = await MongoClient.connect(dbString)
  const db = client.db()
  const meetupsCollection = db.collection('meetups')

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupid),
  })

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  }
}

export default MeetUpDetails
