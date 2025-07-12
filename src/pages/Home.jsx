import React, { useEffect, useState } from 'react'
import EventCard from '../components/EventCard'
import axios from 'axios'
import { useAppContext } from '../context/appContext'

export default function Home() {

  const {events, getEvents} = useAppContext()

  if(events.length < 1) getEvents()


  






  return (
    <div className='flex flex-col md:flex-row gap-4 flex-wrap md:justify-center p-8'>
      {events?.map((i, k) =>  <EventCard title={i.title} date={i.date} location={i.location} descriptionSnippet={i.description}/>)}
      {/* {dd?.results?.map((i, k) =>  <EventCard title={i.title} date={i.date} location={i.location} descriptionSnippet={i.description}/>)} */}
     
    </div>
  )
}
