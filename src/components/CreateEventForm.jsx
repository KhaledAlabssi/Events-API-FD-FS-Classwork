import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";
// {
//   "title": "Event Title",
//   "description": "Some Description for the Event",
//   "date": "2025-07-10T18:37:05.023Z",
//   "location": "Schloßbezirk 10, 76131 Karlsruhe",
//   "latitude": 8.404746955649602,
//   "longitude": 49.01438194665317
// }
export default function CreateEventForm({setEvents}) {
  const navigate = useNavigate()
  function submitHandler(e) {
    e.preventDefault();
    const t = JSON.parse(localStorage.getItem("userToken"));
    console.log(t);
    
    
    const d = new Date();



    axios
      .post(
        "http://localhost:3001/api/events",
        {
          title: e.target.title.value,
          description: e.target.description.value,
          date: d,
          location: "Schloßbezirk 10, 76131 Karlsruhe",
          latitude: 8.404746955649602,
          longitude: 49.01438194665317,
        },
        {
          headers: {
            Authorization: `Bearer ${t}`
          }
        }
        
      )
      .then((x) => {
        axios("http://localhost:3001/api/events").then(y => setEvents(y.data.results)).catch(e => console.error(e))
        navigate('/')})
      .catch((e) => console.log(e));
  }
  return (
    <div className="h-full  flex justify-center items-center  w-full bg-pink-300">
      <form onSubmit={submitHandler}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">title</label>
          <input
            type="text"
            className="input"
            placeholder="title"
            name="title"
          />

          <label className="label">description</label>
          <input
            type="text"
            className="input"
            placeholder="description"
            name="description"
          />

          <button className="btn btn-neutral mt-4">create event</button>
          <p>
            you can create your account now...
            {/* <button className="badge bg-primary" onClick={() => setIsRegiter(!isRegiter)}>
          register
        </button> */}
          </p>
        </fieldset>
      </form>
    </div>
  );
}
