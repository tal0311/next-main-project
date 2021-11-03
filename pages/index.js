import Head from 'next/head'
import { MongoClient } from 'mongodb'

import React from 'react'
import MainNavigation from '../components/layout/MainNavigation'
import MeetupList from '../components/meetups/MeetupList'

function HomePage({ meetups }) {
  return (
    <>
      <Head>
        <title>Israel meetups</title>
        <meta
          name='description'
          content='Find a developers meetups everywhere in israel!'
        />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  )
}

// return props for the component
// this code will not show on client side
export const getStaticProps = async () => {
  const dbString =
    'mongodb+srv://talamit:711Aialt@meetups.uwzlc.mongodb.net/meetups?retryWrites=true&w=majority'

  const client = await MongoClient.connect(dbString)
  const db = client.db()
  const meetupsCollection = db.collection('meetups')

  const meetups = await meetupsCollection.find().toArray()

  return {
    props: {
      meetups: meetups.map((meetup) => {
        return {
          id: meetup._id.toString(),
          title: meetup.title,
          address: meetup.address,
          image: meetup.image,
        }
      }),
    },
    revalidate: 10,
  }
}
export default HomePage
