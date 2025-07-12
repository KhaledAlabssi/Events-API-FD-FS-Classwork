import React from 'react'
import CreateEventForm from '../components/CreateEventForm'

export default function CreateEvent({setEvents}) {
  return (
    <div>CreateEvent

    <CreateEventForm setEvents={setEvents} />

    </div>
  )
}
