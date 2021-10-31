import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function NewMeetupPage() {
  const addNewMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData)
  }

  return <NewMeetupForm onAddMeetup={addNewMeetupHandler} />
}

export default NewMeetupPage
