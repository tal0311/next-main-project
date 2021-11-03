import { MongoClient } from 'mongodb'

// api/create-new-meetup

const newMeetupController = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body

    const dbString =
      'mongodb+srv://talamit:711Aialt@meetups.uwzlc.mongodb.net/meetups?retryWrites=true&w=majority'

    const client = await MongoClient.connect(dbString)
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const result = await meetupsCollection.insertOne(data)
    console.log(result)

    client.close()

    res.status(201).json({ message: 'meetup inserted!' })
  }
}

export default newMeetupController
