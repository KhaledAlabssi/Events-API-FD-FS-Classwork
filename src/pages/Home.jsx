import React, { useEffect, useState } from 'react'
import EventCard from '../components/EventCard'
import axios from 'axios'

export default function Home({events}) {






  return (
    <div className='flex flex-col md:flex-row gap-4 flex-wrap md:justify-center p-8'>
      {events?.map((i, k) =>  <EventCard title={i.title} date={i.date} location={i.location} descriptionSnippet={i.description}/>)}
      {/* {dd?.results?.map((i, k) =>  <EventCard title={i.title} date={i.date} location={i.location} descriptionSnippet={i.description}/>)} */}
     
    </div>
  )
}
