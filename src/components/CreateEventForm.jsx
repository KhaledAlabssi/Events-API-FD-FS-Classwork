import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";
import { useAppContext } from "../context/appContext";
// {
//   "title": "Event Title",
//   "description": "Some Description for the Event",
//   "date": "2025-07-10T18:37:05.023Z",
//   "location": "Schloßbezirk 10, 76131 Karlsruhe",
//   "latitude": 8.404746955649602,
//   "longitude": 49.01438194665317
// }
export default function CreateEventForm() {
  const { getEvents, showToast } = useAppContext();
  const navigate = useNavigate();
  function submitHandler(e) {
    e.preventDefault();
    const t = JSON.parse(localStorage.getItem("userToken"));
    console.log(t);

    const d = new Date(e.target.date.value);

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
            Authorization: `Bearer ${t}`,
          },
        }
      )
      .then((x) => {
        axios("http://localhost:3001/api/events?limit=1000")
          .then((y) => getEvents(y.data.results))
          .catch((e) => console.error(e));
        navigate("/");
      })
      .catch((e) => console.log(e));
    showToast("Event been created successfully!!!");
  }
  return (
    <div className="">
      <form onSubmit={submitHandler}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <h2 className="card-title">Create New Event...</h2>
          <label className="label">Title</label>
          <input
            type="text"
            className="input"
            placeholder="title"
            name="title"
          />

          <label className="label">Description</label>
          <input
            type="text"
            className="input"
            placeholder="description"
            name="description"
          />

          <label className="label">Event Date</label>
          <input
            type="datetime-local"
            className="input"
            placeholder="description"
            name="date"
          />

          <button className="btn btn-neutral mt-4">create event</button>
        </fieldset>
      </form>
    </div>
  );
}
