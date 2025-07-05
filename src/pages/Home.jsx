import React, { useEffect, useState } from 'react'
import EventCard from '../components/EventCard'
import axios from 'axios'

export default function Home() {

  const dd = {
  "totalCount": 1,
  "totalPages": 1,
  "currentPage": 1,
  "hasNextPage": false,
  "hasPreviousPage": false,
  "results": [
    {
      "id": 1,
      "title": "Event Title",
      "description": "Some Description for the Event",
      "date": "2025-07-05T13:55:00.334Z",
      "location": "Schloßbezirk 10, 76131 Karlsruhe",
      "latitude": 8.404746955649602,
      "longitude": 49.01438194665317,
      "organizerId": 1,
      "createdAt": "2025-07-05T13:55:00.334Z",
      "updatedAt": "2025-07-05T13:55:00.334Z"
    },
    {
      "id": 2,
      "title": "Event2 Title",
      "description": "Some2 Description for the Event",
      "date": "2025-07-05T13:55:00.334Z",
      "location": "Schloßbezirk 10, 76131 Karlsruhe",
      "latitude": 8.404746955649602,
      "longitude": 49.01438194665317,
      "organizerId": 1,
      "createdAt": "2025-07-05T13:55:00.334Z",
      "updatedAt": "2025-07-05T13:55:00.334Z"
    }
  ]
}

const [events, setEvents] = useState([])

useEffect(() => {

  axios("http://localhost:3001/api/events").then(x => setEvents(x.data.results)
  )

},[])
  return (
    <div className='flex flex-col md:flex-row gap-4 flex-wrap md:justify-center p-8'>
      {events?.map((i, k) =>  <EventCard title={i.title} date={i.date} location={i.location} descriptionSnippet={i.description}/>)}
      {dd?.results?.map((i, k) =>  <EventCard title={i.title} date={i.date} location={i.location} descriptionSnippet={i.description}/>)}
     
    </div>
  )
}
