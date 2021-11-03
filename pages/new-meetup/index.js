import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function NewMeetupPage() {
  const router = useRouter()

  async function addNewMeetupHandler(enteredMeetupData) {
    const response = await fetch('/api/create-new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'Application/json',
      },
    })

    const data = await response.json()
    console.log(data)

    router.push('/')
  }

  return (
    <>
      <Head>
        <title>Add a new meetup</title>
        <meta
          name='description'
          content='Add your own meetups and start networking'
        />
      </Head>
      <NewMeetupForm onAddMeetup={addNewMeetupHandler} />
    </>
  )
}

export default NewMeetupPage
